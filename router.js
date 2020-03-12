import Stories from "./pages/stories"

const router = new Navigator(null, true, "#")

export default class RouterHandler {
    constructor() {
        this.createRoutes()
    }

    createRoutes() {
        const routes = [
            {path: "/", page: Stories}
        ];

        routes.forEach(route => {
            //this syntax is for adding a route Navigo syntax
            //router.on('path', callback).resolve()
            router.onLine(route.path, () => {
                console.log(route.page());
            }).resolve();
        })
    }
}