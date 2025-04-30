import React, { createContext, useReducer, useEffect } from 'react';

const initialState = {
  projects: [],
  loading: false,
  error: null,
};

const projectReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PROJECTS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_PROJECTS_SUCCESS':
      return { ...state, loading: false, projects: action.payload };
    case 'FETCH_PROJECTS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'ADD_PROJECT':
      return { ...state, projects: [...state.projects, action.payload] };
    case 'DELETE_PROJECT':
      return {
        ...state,
        projects: state.projects.filter((project) => project.id !== action.payload),
      };
    case 'EDIT_PROJECT':
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === action.payload.id ? action.payload : project
        ),
      };
    default:
      return state;
  }
};

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectReducer, initialState);

  useEffect(() => {
    const fetchProjects = async () => {
      dispatch({ type: 'FETCH_PROJECTS_REQUEST' });
      try {
        const response = await fetch('http://localhost:5000/projects');
        if (!response.ok) throw new Error('Ошибка при загрузке проектов');
        const data = await response.json();
        dispatch({ type: 'FETCH_PROJECTS_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_PROJECTS_FAILURE', payload: error.message });
      }
    };

    fetchProjects();
  }, []);

  const addProject = async (project) => {
    try {
      const response = await fetch('http://localhost:5000/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project),
      });
      if (!response.ok) throw new Error('Ошибка при добавлении проекта');
      const data = await response.json();
      dispatch({ type: 'ADD_PROJECT', payload: data });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const deleteProject = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/projects/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Ошибка при удалении проекта');
      dispatch({ type: 'DELETE_PROJECT', payload: id });
    } catch (error) {
      console.error(error);
    }
  };

  const editProject = async (updatedProject) => {
    try {
      const response = await fetch(`http://localhost:5000/projects/${updatedProject.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProject),
      });
      if (!response.ok) throw new Error('Ошибка при редактировании проекта');
      const data = await response.json();
      dispatch({ type: 'EDIT_PROJECT', payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        loading: state.loading,
        error: state.error,
        addProject,
        deleteProject,
        editProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
