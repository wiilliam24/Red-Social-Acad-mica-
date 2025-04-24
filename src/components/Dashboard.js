import React, { useState } from 'react';
import { courses, studyGroups } from '../data';
import StudyGroups from './StudyGroups';

const Dashboard = ({ user, onLogout }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  
  // Filtrar grupos de estudio por la materia seleccionada
  const filteredGroups = selectedCourse 
    ? studyGroups.filter(group => group.courseId === selectedCourse.id)
    : [];
    
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <span className="navbar-brand">Red Social Académica</span>
          <div className="navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <span className="nav-link">Bienvenido, {user.name}</span>
              </li>
              <li className="nav-item">
                <button 
                  className="btn btn-outline-light" 
                  onClick={onLogout}
                >
                  Cerrar Sesión
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-header bg-secondary text-white">
              <h5 className="mb-0">Materias Disponibles</h5>
            </div>
            <div className="card-body">
              <div className="list-group">
                {courses.map(course => (
                  <button
                    key={course.id}
                    className={`list-group-item list-group-item-action ${selectedCourse?.id === course.id ? 'active' : ''}`}
                    onClick={() => setSelectedCourse(course)}
                  >
                    {course.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-8">
          {selectedCourse ? (
            <div className="card">
              <div className="card-header bg-info text-white">
                <h5 className="mb-0">Grupos de Estudio - {selectedCourse.name}</h5>
              </div>
              <div className="card-body">
                <StudyGroups groups={filteredGroups} />
              </div>
            </div>
          ) : (
            <div className="alert alert-info">
              Selecciona una materia para ver los grupos de estudio disponibles
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;