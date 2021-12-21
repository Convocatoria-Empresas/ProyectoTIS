const Home = () => import('./components/Home.vue');
const Empresas = () => import('./components/Empresas.vue');
const Seguimiento = () => import('./components/Seguimiento.vue');

//importamos los componentes para el convocatorias
const MostrarConv = () => import('./components/convotacoraias/Mostrar.vue');
const Crear = () => import('./components/convotacoraias/Crear.vue');
const Editar = () => import('./components/convotacoraias/Editar.vue');
//importar form empresa
const RegEmpresa = () => import('./components/paraEmpresas/MostrarRegEm.vue')
//importamos para el seguimiento para empresas
const SegEmpresa = () => import('./components/Seguimiento/SegEmpresas.vue');
const RevSegEmpre = () => import ('./components/Seguimiento/RevSegEmpre.vue')
//importamos para el seguimiento para postulantes
const SegPostulante = () => import('./components/Seguimiento/SegPostulantes.vue');

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
        name: 'editarConvo',
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
        component: RegEmpresa
    },
    {
        name: 'SegEmpresa',
        path: '/SegEmpresa',
        component: SegEmpresa
    },
    {
        name: 'RevSegEmpre',
        path: '/RevSegEmpre',
        component: RevSegEmpre
    },
    {
        name: 'SegPostulante',
        path: '/SegPostulante',
        component: SegPostulante
    }
];
