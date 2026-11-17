
import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import {
  createProject,
  updateProject,
} from "../api/projectAPI";

const initialForm = {
  ProjectName: "",
  Details: "",
  startDate: "",
  EndDate: "",
  priority: "Medium",
  Department: "Frontend",
  status: "Pending",
};

const ProjectModal = ({
  show,
  handleClose,
  selectedProject,
  onSuccess,
}) => {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedProject) {
      setFormData({
        ...initialForm,
        ...selectedProject,
      });
    } else {
      setFormData(initialForm);
    }
  }, [selectedProject, show]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (selectedProject) {
        await updateProject(selectedProject.id, formData);
      } else {
        await createProject(formData);
      }

      await onSuccess();
      handleClose();
    } catch (error) {
      console.error("Error saving project:", error);
      alert("Unable to save project. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      backdrop="static"
    >
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedProject ? "Edit Project" : "Add New Project"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                type="text"
                name="ProjectName"
                value={formData.ProjectName}
                onChange={handleChange}
                placeholder="Enter project name"
                required
              />
            </Col>

            <Col md={6} className="mb-3">
              <Form.Label>Department</Form.Label>
              <Form.Select
                name="Department"
                value={formData.Department}
                onChange={handleChange}
                required
              >
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Full Stack">Full Stack</option>
                <option value="DevOps">DevOps</option>
              </Form.Select>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Project Details</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="Details"
              value={formData.Details}
              onChange={handleChange}
              placeholder="Enter project details"
              required
            />
          </Form.Group>

          <Row>
            <Col md={6} className="mb-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </Col>

            <Col md={6} className="mb-3">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                name="EndDate"
                value={formData.EndDate}
                onChange={handleChange}
                min={formData.startDate || undefined}
                required
              />
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-3">
              <Form.Label>Priority</Form.Label>
              <Form.Select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                required
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </Form.Select>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </Form.Select>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            type="button"
            onClick={handleClose}
            disabled={loading}
          >
            Cancel
          </Button>

          <Button
            variant="primary"
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Saving..."
              : selectedProject
                ? "Update Project"
                : "Create Project"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ProjectModal;
