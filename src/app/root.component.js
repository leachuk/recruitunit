import routerTemplate from './router.html';

let rootComponent = {
  restrict: 'E',
  bindings: {},
  template: routerTemplate,
  $routeConfig: [
    { path: '/home', component: 'home', name: 'Home', useAsDefault: true },
    { path: '/user/:email', component: 'userLanding', name: 'UserLanding'},
		{ path: '/recruiter/:email', component: 'recruiterLanding', name: 'RecruiterLanding'},
    { path: '/user/:email/comparisonrules', component: 'comparisonRule', name: 'ComparisonRule' },
		{ path: '/user/:email/createjobspec', component: 'formJobSpec', name: 'FormJobSpec' },
    { path: '/user/:guid/form', component: 'formSubmit', name: 'FormSubmit' },
    { path: '/user/:email/form/:id', component: 'formRead', name: 'FormRead' }
  ]
};

export default rootComponent;
