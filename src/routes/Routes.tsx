import HomePage from '@pages/HomePage';
import * as ROUTES from '@constants/routes';

const homePageRoutes = {
  id: 'homePageRoutes',
  path: ROUTES.HomePage,
  component: HomePage,
  title: 'Home',
  isDefault: true,
};

const featuresRoutes = {
  id: 'featuresRoutes',
  path: ROUTES.Features,
  component: HomePage,
  title: 'Features',
  isDefault: true,
};

const integrationsRoutes = {
  id: 'integrationsRoutes',
  path: ROUTES.Integrations,
  component: HomePage,
  title: 'Integrations',
  isDefault: true,
};

const visionRoutes = {
  id: 'visionRoutes',
  path: ROUTES.Vision,
  component: HomePage,
  title: 'Vision',
  isDefault: true,
};

const missionRoutes = {
  id: 'missionRoutes',
  path: ROUTES.Mission,
  component: HomePage,
  title: 'Mission',
  isDefault: true,
};

export default [homePageRoutes, featuresRoutes, integrationsRoutes, visionRoutes, missionRoutes];
