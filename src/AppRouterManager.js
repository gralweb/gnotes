// previously was
// import Router from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
// Importar Componentes
// 
import Home from './components/Home.vue'
import Note from './components/Note/Note.vue'
import TagNote from './components/Note/TagNote.vue'
import AddNote from './components/Note/AddNote.vue'
import EditNote from './components/Note/EditNote.vue'
 
const routes = [
	{ path: '/', component: Home },
	{ path: '/add', component: AddNote },
	{ path: '/tag/:tag', component: TagNote, props : true },
	{ path: '/note/:id', component: Note, props : true },
	{ path: '/edit/:id', component: EditNote, props : true },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const AppRouterManager = createRouter({
	// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
	history: createWebHistory(),
	routes, // short for `routes: routes`
})

export default AppRouterManager