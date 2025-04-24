export const courses = [
    { id: 1, name: 'Matemáticas' },
    { id: 2, name: 'Programación' },
    { id: 3, name: 'Física' },
    { id: 4, name: 'Base de Datos' },
    { id: 5, name: 'Estadística' }
  ];
  
  export const studyGroups = [
    { 
      id: 1, 
      courseId: 1, 
      name: 'Grupo Cálculo Diferencial', 
      schedule: 'Lunes y Miércoles, 15:00 - 17:00', 
      location: 'Salón A-101',
      participants: 3,
      maxParticipants: 5
    },
    { 
      id: 2, 
      courseId: 1, 
      name: 'Grupo Álgebra Lineal', 
      schedule: 'Martes y Jueves, 10:00 - 12:00', 
      location: 'Biblioteca Central',
      participants: 4,
      maxParticipants: 6
    },
    { 
      id: 3, 
      courseId: 2, 
      name: 'Grupo JavaScript Avanzado', 
      schedule: 'Viernes, 14:00 - 18:00', 
      location: 'Laboratorio de Cómputo',
      participants: 5,
      maxParticipants: 8
    },
    { 
      id: 4, 
      courseId: 2, 
      name: 'Grupo React & Redux', 
      schedule: 'Sábados, 9:00 - 13:00', 
      location: 'Salón Virtual (Zoom)',
      participants: 7,
      maxParticipants: 10
    },
    { 
      id: 5, 
      courseId: 3, 
      name: 'Grupo Mecánica Clásica', 
      schedule: 'Lunes y Miércoles, 18:00 - 20:00', 
      location: 'Laboratorio de Física',
      participants: 2,
      maxParticipants: 6
    },
    { 
      id: 6, 
      courseId: 4, 
      name: 'Grupo SQL y NoSQL', 
      schedule: 'Jueves, 16:00 - 19:00', 
      location: 'Salón B-205',
      participants: 4,
      maxParticipants: 8
    },
    { 
      id: 7, 
      courseId: 5, 
      name: 'Grupo Estadística Descriptiva', 
      schedule: 'Martes, 17:00 - 19:00', 
      location: 'Aula Magna',
      participants: 3,
      maxParticipants: 7
    }
  ];