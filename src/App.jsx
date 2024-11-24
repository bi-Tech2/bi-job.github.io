import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './Layouts/MainLayout';
import JobPage, { jobLoader } from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';
import JobsPage from './pages/JobsPage';
import AddJobPage from './pages/AddJobPage';

const App = () => {
  const addJob = async (newJob) => {
    const addJob = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(newJob),
    })
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/add-job"
          element={<AddJobPage AddJobSubmit={addJob} />}
        />
        <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />
        {/* Fallback route */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;




















































































































































// import React from 'react'

// const App = () => {
//   const name = 'Dickson'
//   var x = 10;
//   let y = 20;
//   const names = ['Dick', 'Josh', 'Ugo', 'Learn']
//   const styles = {
//     color: 'orange',
//     fontWeight: '900'
//   }
//   const loggedIn = true;

//   return (
//     <>
//     <div classNameName='text-5xl'>Hello {name} {y} {x}</div>
//     <p style={ styles }>Yo whats up {name}</p>
//     <ul>
//       {names.map((names, index) =>(
//           <li key={index}>{names}</li>
//       ))}
//     </ul>
//     {
//       loggedIn ? <h1>Hello {name}</h1> : ''
//     }
//     </>
//   )
// }

// export default App