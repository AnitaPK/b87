
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getProjectByID } from "../api/projectAPI";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaBuilding,
  FaFlag,
  FaTasks,
  FaInfoCircle,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

const ProjectDetails = () => {
  const { ID } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchData() {
    try {
      setLoading(true);
      const res = await getProjectByID(ID);
      setProject(res);
    } catch (error) {
      console.error("Error fetching project:", error);
      setError("Unable to load project details.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [ID]);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3 text-secondary">Loading project details...</p>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger">
          {error || "Project not found."}
        </div>
        <button
          className="btn btn-outline-primary"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft className="me-2" />
          Go Back
        </button>
      </div>
    );
  }

  const priorityClass = {
    High: "danger",
    Medium: "warning",
    Low: "success",
  };

  const statusClass = {
    Pending: "secondary",
    "In Progress": "primary",
    Completed: "success",
  };

  const priorityColor = priorityClass[project.priority] || "secondary";
  const statusColor = statusClass[project.status] || "secondary";

  const formatDate = (date) => {
    if (!date) return "Not specified";

    return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="container py-4 py-md-5">
      {/* Back button and breadcrumb */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <Link
          className="btn btn-outline-secondary rounded-pill px-3"
          to='/'
        >
          <FaArrowLeft className="me-2" />
          Back to Projects
        </Link>

        <span className="text-secondary small">
          Project ID: #{project.id}
        </span>
      </div>

      {/* Main project header */}
      <div
        className="rounded-4 p-4 p-md-5 text-white mb-4 shadow"
        style={{
          background:
            "linear-gradient(135deg, #173b75 0%, #4361ee 60%, #7209b7 100%)",
        }}
      >
        <div className="d-flex flex-wrap justify-content-between align-items-start gap-3">
          <div>
            <span className="badge bg-white text-primary rounded-pill px-3 py-2 mb-3">
              <FaTasks className="me-2" />
              {project.Department}
            </span>

            <h1 className="fw-bold mb-3">
              {project.ProjectName}
            </h1>

            <p className="mb-0 text-white-50">
              Project overview and information
            </p>
          </div>

          <div className="d-flex flex-column gap-2 align-items-start">
            <span className={`badge text-bg-${statusColor} fs-6 px-3 py-2`}>
              {project.status}
            </span>

            <span className={`badge text-bg-${priorityColor} fs-6 px-3 py-2`}>
              <FaFlag className="me-2" />
              {project.priority} Priority
            </span>
          </div>
        </div>
      </div>

      {/* Project overview cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body p-4">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-primary-subtle text-primary rounded-3 p-3">
                  <FaBuilding size={22} />
                </div>
                <div>
                  <p className="text-secondary mb-1">Department</p>
                  <h5 className="fw-bold mb-0">
                    {project.Department || "Not specified"}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body p-4">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-warning-subtle text-warning-emphasis rounded-3 p-3">
                  <FaFlag size={22} />
                </div>
                <div>
                  <p className="text-secondary mb-1">Priority</p>
                  <h5 className="fw-bold mb-0">
                    {project.priority || "Not specified"}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body p-4">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-success-subtle text-success rounded-3 p-3">
                  {project.status === "Completed" ? (
                    <FaCheckCircle size={22} />
                  ) : (
                    <FaClock size={22} />
                  )}
                </div>
                <div>
                  <p className="text-secondary mb-1">Current Status</p>
                  <h5 className="fw-bold mb-0">
                    {project.status || "Not specified"}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details and timeline */}
      <div className="row g-4">
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body p-4 p-md-5">
              <h4 className="fw-bold mb-4">
                <FaInfoCircle className="text-primary me-2" />
                Project Description
              </h4>

              <p
                className="text-secondary mb-0"
                style={{ lineHeight: "1.9", whiteSpace: "pre-wrap" }}
              >
                {project.Details || "No project description available."}
              </p>

              <hr className="my-4" />

              <h6 className="fw-bold mb-3">Project Information</h6>

              <div className="d-flex justify-content-between py-2">
                <span className="text-secondary">Project Name</span>
                <span className="fw-semibold text-end">
                  {project.ProjectName}
                </span>
              </div>

              <div className="d-flex justify-content-between py-2">
                <span className="text-secondary">Department</span>
                <span className="fw-semibold">
                  {project.Department}
                </span>
              </div>

              <div className="d-flex justify-content-between py-2">
                <span className="text-secondary">Project ID</span>
                <span className="fw-semibold">{project.id}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body p-4 p-md-5">
              <h4 className="fw-bold mb-4">
                <FaCalendarAlt className="text-primary me-2" />
                Project Timeline
              </h4>

              <div className="d-flex gap-3 mb-4">
                <div className="d-flex flex-column align-items-center">
                  <div className="rounded-circle bg-success p-2 text-white">
                    <FaCalendarAlt />
                  </div>
                  <div
                    className="bg-success flex-grow-1 mt-2"
                    style={{ width: "2px", minHeight: "45px" }}
                  />
                </div>

                <div>
                  <span className="badge bg-success-subtle text-success mb-2">
                    START DATE
                  </span>
                  <h5 className="fw-bold">
                    {formatDate(project.startDate)}
                  </h5>
                  <p className="text-secondary small mb-0">
                    Planned project commencement
                  </p>
                </div>
              </div>

              <div className="d-flex gap-3">
                <div>
                  <div className="rounded-circle bg-primary p-2 text-white">
                    <FaFlag />
                  </div>
                </div>

                <div>
                  <span className="badge bg-primary-subtle text-primary mb-2">
                    END DATE
                  </span>
                  <h5 className="fw-bold">
                    {formatDate(project.EndDate)}
                  </h5>
                  <p className="text-secondary small mb-0">
                    Planned project completion
                  </p>
                </div>
              </div>

              <hr className="my-4" />

              <div className="bg-light rounded-3 p-3">
                <p className="text-secondary small mb-1">
                  Overall Status
                </p>
                <h6 className="fw-bold mb-0">
                  {project.status === "Completed"
                    ? "This project is completed."
                    : project.status === "In Progress"
                      ? "This project is currently in progress."
                      : "This project is awaiting progress."}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom action */}
      <div className="text-center mt-4">
        <button
          className="btn btn-outline-primary rounded-pill px-4"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft className="me-2" />
          Return to Dashboard
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
