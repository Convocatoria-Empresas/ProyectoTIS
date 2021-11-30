const Home = () => import('./components/Home.vue');
const Empresas = () => import('./components/Empresas.vue');
const Seguimiento = () => import('./components/Seguimiento.vue');

//importamos los componentes para el convocatorias
const MostrarConv = () => import('./components/convotacoraias/Mostrar.vue');
const Crear = () => import('./components/convotacoraias/Crear.vue');
const Editar = () => import('./components/convotacoraias/Editar.vue');
//importar form empresa
const regEmpresa = () => import('./components/paraEmpresas/MostrarRegEm.vue')

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
    },
    {
        name: 'convocatoria',
        path: '/convocatoria',
        component: MostrarConv,
    },
    {
        name: 'crearBlog',
        path: '/crear',
        component: Crear
    },  
    {
        name: 'editarBlog',
        path: '/editar/:id',
        component: Editar,
    },
    {
        name: 'seguimiento',
        path: '/seguimiento',
        component: Seguimiento,
    },
    {
        name: 'empresas',
        path: '/empresas',
        component: Empresas
    }
    ,
    {
        name: 'regEmpresa',
        path: '/RegEmpresa',
        component: regEmpresa
    }
];
