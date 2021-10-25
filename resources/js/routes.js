const Home = () => import('./components/Home.vue');
const Contacto = () => import('./components/Contacto.vue');
const Seguimiento = () => import('./components/Seguimiento.vue');
const RegistrarEmpresas = () => import('./components/RegistrarEmpresas.vue');
//importamos los componentes para el blog
const Mostrar = () => import('./components/blog/Mostrar.vue');
const Crear = () => import('./components/blog/Crear.vue');
const Editar = () => import('./components/blog/Editar.vue');
//importar form empresa


export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'mostrarBlogs',
        path: '/blogs',
        component: Mostrar
    },
    {
        name: 'mostrarEmpresas',
        path: '/RegistrarEmpresas',
        component: RegistrarEmpresas
    },
    {
        name: 'crearBlog',
        path: '/crear',
        component: Crear
    },
    {
        name: 'editarBlog',
        path: '/editar/:id',
        component: Editar
    },
    {
        name: 'seguimiento',
        path: '/sguimiento',
        component: Seguimiento
    },
    {
        name: 'contacto',
        path: '/contacto',
        component: Contacto
    }
];
