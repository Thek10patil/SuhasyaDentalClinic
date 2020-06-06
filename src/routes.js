import React from "react";

import { Route } from "react-router-dom";
// import ListView from './containers/ListView'
// import DetailView from './containers/DetailView'
import FAQ from "./containers/FAQListView";
import DoctorCards from "./containers/DoctorCards";
import DentalServices from "./containers/DentalServicesListView";
import ContactUs from "./containers/ContactUsView";
// import FAQ from './containers/FAQListView';
// import FAQ from './containers/FAQListView';
// import FAQ from './containers/FAQListView';

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={DoctorCards} />
    {/* <Route exact path='/:doctorID' component={DetailView} /> */}
    <Route exact path="/aboutUs" component={DoctorCards} />
    <Route exact path="/faq" component={FAQ} />
    <Route exact path="/dentalServices" component={DentalServices} />
    <Route exact path="/contactUs" component={ContactUs} />
  </div>
);

export default BaseRouter;
