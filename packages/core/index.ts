import { makeInstaller } from "@ryan-ui/utils";
import components from "./components";

// 导出所有组件
export * from "@ryan-ui/components";
import '@ryan-ui/theme/index.css'
// 创建安装器
const installer = makeInstaller(components);

// 默认导出安装器
export default installer;