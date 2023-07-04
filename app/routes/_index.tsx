import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Dynamic Form</h1>
      <ul>
        <li>Setup styling using PandaCSS or Stitches</li>
        <li>Create a multi-step progress indicator</li>
        <li>Integrate the form metadata via MirageJS</li>
        <li>Create a remix validated form</li>
        <li>Add Zod validation</li>
      </ul>
    </div>
  );
}
