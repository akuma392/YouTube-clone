import Reacct, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DownloadVideo({ data }) {
  const [quality, setQuality] = useState("");
  const pixel = ["360p", "480p", "720p", "1080p"];
  const [url, setUrl] = useState("");
  const handleChange = (event) => {
    setQuality(event.target.value);
  };

  const videoItems = data?.videos?.items.filter(
    (elm) => elm.extension === "mp4" && pixel.includes(elm.quality)
  );

  const uniqueVideo = videoItems.reduce((acc, cv) => {
    let accElm = acc.find((elm) => elm.quality === cv.quality);
    if (!!accElm) {
      if (accElm.size < cv.size) {
        acc.push(cv);
        acc.splice(
          acc.findIndex((obj) => obj.size === accElm.size),
          1
        );
      } else {
        return acc;
      }
    } else {
      acc.push(cv);
    }
    return acc;
  }, []);

  const handleDownload = () => {
    if (quality) {
      setUrl(uniqueVideo.find((elm) => elm.quality === quality));
    }
  };

  return (
    <div className="download-video">
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Download</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={quality}
          label="quality"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>

          {pixel.map((elm) => {
            return (
              <MenuItem value={elm} key={elm}>
                {elm}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      {quality && (
        <>
          <a href={url?.url} download target="_blank">
            <i
              class="fa fa-download"
              aria-hidden="true"
              onClick={handleDownload}
            ></i>
          </a>
          <p>{url?.sizeText}</p>
        </>
      )}
    </div>
  );
}
