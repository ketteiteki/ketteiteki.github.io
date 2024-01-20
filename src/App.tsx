import React from "react";
import "./App.scss";
import Avatar from "./assets/images/avatar.jpg";
import { ReactComponent as DebianSvg } from "./assets/svg/debian.svg";
import { ReactComponent as CsharpSvg } from "./assets/svg/csharp.svg";
import { ReactComponent as DotnetSvg } from "./assets/svg/dotnet.svg";
import { ReactComponent as DockerSvg } from "./assets/svg/docker.svg";
import { ReactComponent as TypeScriptSvg } from "./assets/svg/typescript.svg";
import { ReactComponent as ReactSvg } from "./assets/svg/react.svg";
import { ReactComponent as AngularSvg } from "./assets/svg/angular.svg";
import { ReactComponent as GitSvg } from "./assets/svg/git.svg";
import { ReactComponent as PostgresqlSvg } from "./assets/svg/postgresql.svg";

function App() {
  return (
    <div className="wrapper">
      <h1 className="nickname">ketteiteki's</h1>
      <div className="avatarAndDescription">
        <div className="avatarContainer">
          <img src={Avatar} className="avatar" alt="avatar" />
        </div>
        <div className="descriptionContainer">
          <p className="description">
            Hello. My name is Dmitry.
            <br />
            <br />
            I am an 18yo .NET backend developer from Samara, Russia. I have a
            keen interest in software engineering, architecture, and system
            design.
            <br />
            <br />I am ready for new professional opportunities and excited
            about exploring interesting projects.
          </p>
          <div className="contacts">
            <a href="https://github.com/ketteiteki" target="_blank">Github</a>
            <a href="https://t.me/dmtlr" target="_blank">Telegram</a>
            <a href="https://discordapp.com/users/1027241766778323036" target="_blank">Discord</a>
          </div>
          <div className="skills">
            <DebianSvg className="svg" />
            <CsharpSvg className="svg" />
            <DotnetSvg className="svg" />
            <DockerSvg className="svg" />
            <TypeScriptSvg className="svg" />
            <ReactSvg className="svg" />
            <AngularSvg className="svg" />
            <GitSvg className="svg" />
            <PostgresqlSvg className="svg" />
          </div>
        </div>
      </div>
      <div className="projects">
        <h3>Projects I was involved in</h3>
        <a href="https://github.com/ketteiteki/Messenger" target="_blank">Messenger</a>
        <a href="https://github.com/EventTriangle/EventTriangleAPI" target="_blank">Event Triangle</a>
      </div>
      <div className="articles">
        <h3>My Articles</h3>
        <a href="https://github.com/ketteiteki/SecureAzureOIDC/blob/main/out/SecureAzureOIDC.pdf" target="_blank">Secure Azure OIDC</a>
      </div>
      <div className="professionalProfile">
        <h3>Professional Profile</h3>
        <a href="https://github.com/ketteiteki/resume/blob/main/out/dmitry_kudryashov_cv_eng.pdf" target="_blank">Resume</a>
      </div>
      <div className="fun">
        <h3>Fun</h3>
        <a href="https://shikimori.one/ketteiteki/list/anime?order=rate_score" target="_blank">My anime tier list</a>
      </div>
    </div>
  );
}

export default App;
