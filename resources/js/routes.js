const Home = () => import('./components/Home.vue');
const Empresas = () => import('./components/Empresas.vue');
const Seguimiento = () => import('./components/Seguimiento.vue');
const Postular = () => import('./components/Postular.vue');

//importamos los componentes para el convocatorias
const MostrarConv = () => import('./components/convotacoraias/Mostrar.vue');
const Crear = () => import('./components/convotacoraias/Crear.vue');
const Editar = () => import('./components/convotacoraias/Editar.vue');
//importar form empresa
const RegEmpresa = () => import('./components/paraEmpresas/MostrarRegEm.vue');
const EditarEmpre = () => import('./components/paraEmpresas/EditarRegEm.vue');
//importamos para el Postular y revision para empresas
const SegEmpresa = () => import('./components/Seguimiento/SegEmpresas.vue');
const RevSegEmpre = () => import ('./components/Seguimiento/RevSegEmpre.vue')
//importamos para el seguimiento y revision para postulantes
const SegPostulante = () => import('./components/Seguimiento/SegPostulantes.vue');
const RevSegPost = () => import('./components/Seguimiento/RevSegPost.vue');
//agregamos el login y el registro
const Login =() => import('./components/Login.vue');
const Registrarse = () => import('./components/Registrarse.vue');

//Todo para los ESTUDIANTES
const HomeEst = () => import ('./components/Estudiante/HomeEst.vue');
const EmpresaEst = () => import('./components/Estudiante/EmpresaEst.vue');
const RegEmpEst = () => import('./components/Estudiante/RegEmpEst.vue');
const ConvoEst = () => import ('./components/Estudiante/ConvoEst.vue');
const SegEmpEst = () => import ('./components/Estudiante/EmpEstudiante/SegEmpEst.vue');
const SegPostEst = () => import ('./components/Estudiante/PostEstudiante/SegPostEst.vue');
const PostularEst = () => import ('./components/Estudiante/PostEstudiante/PostularEst.vue');
const RevPostEst =() => import('./components/Estudiante/PostEstudiante/RevPostEst.vue');



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
        name: 'postular',
        path: '/postular',
        component: Postular,
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
    },
    {
        name: 'regEmpresa',
        path: '/RegEmpresa',
        component: RegEmpresa
    },
    {
        name: 'editarEmpre',
        path: '/EditarRegEm/:id',
        component: EditarEmpre
    },
    {
        name: 'SegEmpresa',
        path: '/SegEmpresa',
        component: SegEmpresa
    },
    {
        name: 'RevSegEmpre',
        path: '/RevSegEmpre:id',
        component: RevSegEmpre
    },
    {
        name: 'SegPostulante',
        path: '/SegPostulante',
        component: SegPostulante
    },
    {
        name: 'RevSegPost',
        path: '/RevSegPost/:id',
        component: RevSegPost
    },
    {
        name:'Login',
        path: '/Login',
        component: Login
    },
    {
        name:'Registrarse',
        path:'/Registrarse',
        component: Registrarse
    },
    {
        name:'AppEst',
        path:'/HomeEst',
        component: HomeEst
    },
    {
        name:'RegEmpEst',
        path:'/RegEmpEst',
        component: RegEmpEst
    },
    {
        name:'EmpresaEst',
        path:'/EmpresaEst',
        component: EmpresaEst
    },
    {
        name:'ConvoEst',
        path:'/ConvoEst',
        component: ConvoEst
    },
    {
        name:'SegEmpEst',
        path:'/SegEmpEst',
        component: SegEmpEst
    },
    {
        name:'SegPostEst',
        path:'/SegPostEst',
        component: SegPostEst
    },
    {
        name:'PostularEst',
        path:'/PostularEst',
        component: PostularEst
    },
    {
        name:'RevPostEst',
        path:'/RevPosEst',
        component: RevPostEst
    }
];
