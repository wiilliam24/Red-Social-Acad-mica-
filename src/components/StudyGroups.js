import React, { useState } from 'react';

const StudyGroups = ({ groups }) => {
  const [joinedGroups, setJoinedGroups] = useState([]);
  
  const handleJoinGroup = (groupId) => {
    if (joinedGroups.includes(groupId)) {
      setJoinedGroups(joinedGroups.filter(id => id !== groupId));
    } else {
      setJoinedGroups([...joinedGroups, groupId]);
    }
  };
  
  if (groups.length === 0) {
    return (
      <div className="alert alert-warning">
        No hay grupos de estudio disponibles para esta materia.
      </div>
    );
  }
  
  return (
    <div className="row g-3">
      {groups.map(group => (
        <div key={group.id} className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{group.name}</h5>
              <p className="card-text">
                <strong>Horario:</strong> {group.schedule}<br />
                <strong>Ubicación:</strong> {group.location}<br />
                <strong>Participantes:</strong> {group.participants}/{group.maxParticipants}
              </p>
              <button
                className={`btn ${joinedGroups.includes(group.id) ? 'btn-danger' : 'btn-success'} w-100`}
                onClick={() => handleJoinGroup(group.id)}
              >
                {joinedGroups.includes(group.id) ? 'Salir del Grupo' : 'Unirse al Grupo'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudyGroups;