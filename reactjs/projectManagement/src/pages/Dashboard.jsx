
import React, { useEffect, useMemo, useState } from "react";
import {
  getAllProjects,
  deleteProject,
  updateStatus,
} from "../api/projectAPI";
import ProjectModal from "../components/ProjectModal";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingStatusId, setUpdatingStatusId] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Search and filter states
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;

  // Fetch all projects
  async function fetchAllData() {
    try {
      setLoading(true);
      const data = await getAllProjects();
      setProjects(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching projects:", error);
      alert("Unable to fetch projects.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAllData();
  }, []);

  // Update status locally
  const handleChange = (id, newStatus) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status: newStatus } : p
      )
    );
  };

  // Save status to API
  async function handleStatusUpdate(id, status) {
    try {
      setUpdatingStatusId(id);

      await updateStatus(id, { status });

      alert("Status updated successfully!");
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status.");

      // Restore the latest data from API
      await fetchAllData();
    } finally {
      setUpdatingStatusId(null);
    }
  }

  // Delete project
  async function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this project?")) {
      return;
    }

    try {
      await deleteProject(id);
      await fetchAllData();
      alert("Project deleted successfully!");
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("Failed to delete project.");
    }
  }

  // Modal handlers
  const handleAddNew = () => {
    setSelectedProject(null);
    setShowModal(true);
  };

  const handleEdit = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const handleSuccess = async () => {
    await fetchAllData();
  };

  // Reset all filters
  const handleReset = () => {
    setSearch("");
    setStatusFilter("");
    setPriorityFilter("");
    setDepartmentFilter("");
    setCurrentPage(1);
  };

  // Normalize status values such as "In-progress" and "In Progress"
  const normalize = (value) =>
    String(value || "").trim().toLowerCase().replace(/[\s-]+/g, " ");

  // Apply search and all filters
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const searchText = search.trim().toLowerCase();

      const matchesSearch =
        String(p.ProjectName || "").toLowerCase().includes(searchText) ||
        String(p.Details || "").toLowerCase().includes(searchText);

      const matchesStatus =
        !statusFilter ||
        normalize(p.status) === normalize(statusFilter);

      const matchesPriority =
        !priorityFilter ||
        normalize(p.priority) === normalize(priorityFilter);

      const matchesDepartment =
        !departmentFilter ||
        normalize(p.Department) === normalize(departmentFilter);

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority &&
        matchesDepartment
      );
    });
  }, [
    projects,
    search,
    statusFilter,
    priorityFilter,
    departmentFilter,
  ]);

  // Reset to first page whenever search or filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, statusFilter, priorityFilter, departmentFilter]);

  // Pagination calculations
  const totalPages = Math.ceil(
    filteredProjects.length / projectsPerPage
  );

  const startIndex = (currentPage - 1) * projectsPerPage;

  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  // Keep the current page valid after deletion or filtering
  useEffect(() => {
    if (currentPage > Math.max(totalPages, 1)) {
      setCurrentPage(Math.max(totalPages, 1));
    }
  }, [currentPage, totalPages]);

  // Departments available in the API data
  const departments = [
    ...new Set(
      projects.map((p) => p.Department).filter(Boolean)
    ),
  ].sort();

  // Status badge color
  const getStatusClass = (status) => {
    switch (normalize(status)) {
      case "completed":
        return "success";
      case "in progress":
        return "primary";
      case "pending":
        return "warning";
      default:
        return "secondary";
    }
  };

  const getPriorityClass = (priority) => {
    switch (normalize(priority)) {
      case "high":
        return "danger";
      case "medium":
        return "warning";
      case "low":
        return "success";
      default:
        return "secondary";
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100 py-4">
      {/* Header */}
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h2 className="fw-bold mb-1">Project Dashboard</h2>
          <p className="text-secondary mb-0">
            Manage, search and track all your projects.
          </p>
        </div>

        <button
          className="btn btn-primary px-4"
          onClick={handleAddNew}
        >
          + Add New Project
        </button>
      </div>

      {/* Search and Filters */}
      <div className="card border-0 shadow-sm rounded-4 mb-4">
        <div className="card-body p-3 p-md-4">
          <h5 className="fw-semibold mb-3">
            Search & Filter Projects
          </h5>

          <div className="row g-3">
            {/* Search */}
            <div className="col-12 col-md-6 col-lg-3">
              <label className="form-label fw-medium">
                Search Projects
              </label>
              <input
                type="search"
                className="form-control"
                placeholder="Search name or details..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Status Filter */}
            <div className="col-12 col-md-6 col-lg-2">
              <label className="form-label fw-medium">
                Status
              </label>
              <select
                className="form-select"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="In-progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            {/* Priority Filter */}
            <div className="col-12 col-md-6 col-lg-2">
              <label className="form-label fw-medium">
                Priority
              </label>
              <select
                className="form-select"
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
              >
                <option value="">All Priorities</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            {/* Department Filter */}
            <div className="col-12 col-md-6 col-lg-3">
              <label className="form-label fw-medium">
                Department
              </label>
              <select
                className="form-select"
                value={departmentFilter}
                onChange={(e) =>
                  setDepartmentFilter(e.target.value)
                }
              >
                <option value="">All Departments</option>

                {departments.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset */}
            <div className="col-12 col-lg-2 d-flex align-items-end">
              <button
                className="btn btn-outline-secondary w-100"
                onClick={handleReset}
              >
                Reset Filters
              </button>
            </div>
          </div>

          <div className="mt-3 text-secondary small">
            Showing{" "}
            <strong>{filteredProjects.length}</strong> matching
            projects out of <strong>{projects.length}</strong>.
          </div>
        </div>
      </div>

      {/* Project Table */}
      <div className="card border-0 shadow-sm rounded-4">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-dark">
                <tr>
                  <th className="px-3 py-3">#</th>
                  <th className="py-3">Project</th>
                  <th className="py-3">Department</th>
                  <th className="py-3">Priority</th>
                  <th className="py-3">Start Date</th>
                  <th className="py-3">End Date</th>
                  <th className="py-3">Status</th>
                  <th className="py-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="8" className="text-center py-5">
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="visually-hidden">
                          Loading...
                        </span>
                      </div>
                      <p className="text-secondary mt-2 mb-0">
                        Loading projects...
                      </p>
                    </td>
                  </tr>
                ) : currentProjects.length === 0 ? (
                  <tr>
                    <td
                      colSpan="8"
                      className="text-center py-5 text-secondary"
                    >
                      <h5>No projects found</h5>
                      <p className="mb-0">
                        Try changing your search or filters.
                      </p>
                    </td>
                  </tr>
                ) : (
                  currentProjects.map((p, i) => (
                    <tr key={p.id}>
                      <td className="px-3">
                        {startIndex + i + 1}
                      </td>

                      <td>
                        <Link
                          to={`/project/${p.id}`}
                          className="fw-semibold text-decoration-none"
                        >
                          {p.ProjectName}
                        </Link>
                        <div
                          className="text-secondary small"
                          style={{ maxWidth: "220px" }}
                        >
                          {p.Details}
                        </div>
                      </td>

                      <td>{p.Department}</td>

                      <td>
                        <span
                          className={`badge text-bg-${getPriorityClass(
                            p.priority
                          )}`}
                        >
                          {p.priority}
                        </span>
                      </td>

                      <td>{p.startDate || "-"}</td>

                      <td>{p.EndDate || "-"}</td>

                      <td>
                        <div className="d-flex flex-column gap-2">
                          <span
                            className={`badge text-bg-${getStatusClass(
                              p.status
                            )}`}
                          >
                            {p.status || "Pending"}
                          </span>

                          <select
                            className="form-select form-select-sm"
                            value={p.status || "Pending"}
                            onChange={(e) =>
                              handleChange(p.id, e.target.value)
                            }
                            aria-label={`Status for ${p.ProjectName}`}
                          >
                            <option value="Pending">Pending</option>
                            <option value="In-progress">
                              In Progress
                            </option>
                            <option value="Completed">
                              Completed
                            </option>
                          </select>

                          <button
                            className="btn btn-outline-primary btn-sm"
                            disabled={updatingStatusId === p.id}
                            onClick={() =>
                              handleStatusUpdate(p.id, p.status)
                            }
                          >
                            {updatingStatusId === p.id
                              ? "Updating..."
                              : "Update Status"}
                          </button>
                        </div>
                      </td>

                      <td>
                        <div className="d-flex gap-2">
                          <button
                            className="btn btn-warning btn-sm"
                            onClick={() => handleEdit(p)}
                          >
                            Edit
                          </button>

                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(p.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {!loading && filteredProjects.length > 0 && (
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 p-3 border-top">
              <div className="text-secondary small">
                Showing {startIndex + 1} to{" "}
                {Math.min(
                  startIndex + projectsPerPage,
                  filteredProjects.length
                )}{" "}
                of {filteredProjects.length} projects
              </div>

              <nav aria-label="Project pagination">
                <ul className="pagination pagination-sm mb-0 flex-wrap">
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() =>
                        setCurrentPage((prev) => prev - 1)
                      }
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                  </li>

                  {Array.from(
                    { length: totalPages },
                    (_, i) => i + 1
                  ).map((page) => (
                    <li
                      key={page}
                      className={`page-item ${
                        currentPage === page ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    </li>
                  ))}

                  <li
                    className={`page-item ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() =>
                        setCurrentPage((prev) => prev + 1)
                      }
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>

      {/* Add/Edit Project Modal */}
      <ProjectModal
        show={showModal}
        handleClose={handleClose}
        selectedProject={selectedProject}
        onSuccess={handleSuccess}
      />
    </div>
  );
};

export default Dashboard;
