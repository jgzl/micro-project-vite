// import service from "@/utils/axios";
//
// function fetchSubApp() {
//     service.get("/api/uc/fetchSubApp")
//         .then((r)=>{
//             return r.data.data
//         })
//         .catch((e)=>{
//             console.error(e)
//         })
// }

export default {
    apps: [
        {
            name: 'subapp1',		// 子应用 package.json 中 name
            entry: import.meta.env.VITE_APP_QIANKUN_SUBAPP1_ENTRY,	// 子应用的 ip 地址
            container: '#sub-container', // 子应用的容器，在主应用的 main.js 中
            activeRule: '/portal/app1',		// 激活当前子应用时路径前自动拼接的路径
            props: {
                // 主应用向微应用传递参数
                msg: '主应用参数-subapp1'
            }
        },
        {
            name: 'subapp2',		// 子应用 package.json 中 name
            entry: import.meta.env.VITE_APP_QIANKUN_SUBAPP2_ENTRY,	// 子应用的 ip 地址
            container: '#sub-container', // 子应用的容器，在主应用的 main.js 中
            activeRule: '/portal/app2',		// 激活当前子应用时路径前自动拼接的路径
            props: {
                // 主应用向微应用传递参数
                msg: '主应用参数-subapp2'
            }
        }
    ]
}

// export default {
//     apps: [
//         {
//             name: 'subapp1',		// 子应用 package.json 中 name
//             entry: '//192.168.192.1:8180/app/subapp1',	// 子应用的 ip 地址
//             container: '#sub-container', // 子应用的容器，在主应用的 main.js 中
//             activeRule: '/subapp/app1',		// 激活当前子应用时路径前自动拼接的路径
//             props: {
//                 // 主应用向微应用传递参数
//                 msg: '主应用参数-subapp1'
//             }
//         },
//         {
//             name: 'subapp2',		// 子应用 package.json 中 name
//             entry: '//192.168.192.1:8180/app/subapp2',	// 子应用的 ip 地址
//             container: '#sub-container', // 子应用的容器，在主应用的 main.js 中
//             activeRule: '/subapp/app2',		// 激活当前子应用时路径前自动拼接的路径
//             props: {
//                 // 主应用向微应用传递参数
//                 msg: '主应用参数-subapp2'
//             }
//         }
//     ]
// }