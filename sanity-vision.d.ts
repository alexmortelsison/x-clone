declare module "@sanity/vision" {
  import { Tool } from "sanity";

  export function visionTool(options?: { defaultApiVersion?: string }): Tool;
}
