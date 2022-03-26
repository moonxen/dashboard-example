import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon  from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

export default function New({inputs, title}) {

    const [file, set_file] = useState("");
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt="img"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                    Image:
                  <DriveFolderUploadOutlinedIcon className="icon"/>
                </label>
                <input onChange={e => set_file(e.target.files[0])} type={"file"} id="file" style={{display:"none"}}/>
              </div>

              <div className="formInput">
                <label>Username</label>
                <input type={"text"} placeholder="john_doe" />
              </div>
              {
                  inputs.map(input => (
                      <div className="formInput" key={input.id}>
                          <label>{input.label}</label>
                          <input type={input.type} placeholder={input.placeholder}/>
                      </div>
                  ))
              }
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
