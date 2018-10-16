import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Imort Views
import { Products } from './../components/Products';
import { ProductDetail } from './../components/ProductDetail';
import { Checkin } from './../components/Checkin';
import { NotFound } from './../components/NotFound';
import { Admin } from './../components/Admin';
import { Success } from './../components/Success';

const Routes = () => {
  return (
    <div className="row">
      <div className="d-flex w-100 justify-content-center pt-3 pb-3">
        <div className="col-12 col-lg-10 p-0 mb-4">
          <Switch>
            <Route exact path="/" component={Products}></Route>
            <Route exact path="/product/:id" component={ProductDetail}></Route>
            <Route exact path="/checkin/:token" component={Checkin}></Route>
            <Route exact path="/admin" component={Admin}></Route>
            <Route path="/Success" component={Success}></Route>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default Routes;
