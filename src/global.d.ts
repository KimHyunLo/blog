declare module "*.module.css" {
  const content: { [className: string]: string };
  export = content;
}
declare module "*.jpg";
declare module "*.png";