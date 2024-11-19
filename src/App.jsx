import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TableWord from './component/TableWord';
import LayoutSidebar from './Layout/LayoutSidebar';
import Pages from './page/pageScreen/Pages';
import Components from './page/pageScreen/Components';
import Forms from './page/pageScreen/Forms';
import Tables from './page/pageScreen/Tables';
import Maps from './page/pageScreen/Maps';
import Charts from './page/pageScreen/Charts';
import Widgets from './page/pageScreen/Widgets';
import Calenders from './page/pageScreen/Calenders';
import Dashboard from './page/pageScreen/Dashboard';
import { routeSubJudul } from './data/dataDami';


const App = () => {

  return (
    <Routes>
      <Route path='/table' element={<TableWord/>  } />
      <Route path="/" element={<LayoutSidebar />}>
        <Route index element={<Dashboard />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/components" element={<Components />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/widgets" element={<Widgets />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/calender" element={<Calenders />} />
        {routeSubJudul.map((e, index) => (
  e.sub_judul &&
  e.sub_judul.map((item, subIndex) => (
    <Route 
      key={`${index}-${subIndex}`}
      path={`/${item.path}`} 
      element={React.createElement(item.judul)} 
    />
  ))
))}

      </Route>
    </Routes>
  );
};

export default App;
