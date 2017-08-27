// 1. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.

const routes = [
    { path: '/', component: Components.DefaultComponent },
    { path: '/tile', component: Components.Tile },
    { path: '/labelTextControl', component: Components.LabelTextControl },
    { path: '/textlabeltile', component: Components.TextLabelTile },
    { path: '/bargraph', component: Components.HorizontalBarComponent },
    { path: '/blockContainer', component: Components.EqualMarginBlock },
    { path: '/dataTable', component: Components.DataTableComponent }

]

// 2. Create the router instance
// .. and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes // short for routes: routes
})

// 3. Define the state object of your app
// think of this as an xml (json) scheme of the state
// storage of your app, this state is reactive, so
// everything that depends on it will rerender automatically
// when you change the object!
var state = {
    test: 0
}

// 4. launch app with state as 'data' attribute
// launch app in div with id 'app'
var AppInstance = new Vue({
    el: document.getElementById('app'),
    router,
    data: {
        state: state
    }
})


// make sure the vue instance is destroyed
cleanAfter(AppInstance)