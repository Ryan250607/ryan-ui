import type { App, Plugin } from "vue";
import { each } from "lodash-es";

type SFCWithInstall<T> = T & Plugin;

export function makeInstaller(components: Plugin[]) {
  const install = (app: App) =>
    each(components, (c) => {
      app.use(c);
    });

  return install as Plugin;
}
export const withInstall = <T>(component: T) => {
  console.log('Registering component:', (component as any)?.name);
  
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any)?.name || "UnnamedComponent";
    console.log('Installing component:', name);
    app.component(name, component as SFCWithInstall<T>);
  };
  
  return component as SFCWithInstall<T>;
};