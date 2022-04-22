import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div className="blog">
        <Link
          to="https://r3---sn-5aap5ojx-jj0z.googlevideo.com/videoplayback?expire=1649936049&ei=UbJXYr3eMM268gS1rKfgBQ&ip=44.200.29.107&id=o-AFfHDmaDAJnECxhF9gDM1YXDO8x5v_LgDFjQVzoB6u_f&itag=18&source=youtube&requiressl=yes&spc=4ocVC4oHcb5YYBddf3RiGHoHG5ShurL23uqViI0Q9Q&vprv=1&mime=video%2Fmp4&ns=cs51_6FZn1lwow3-4p_hMx4G&gir=yes&clen=11591713&ratebypass=yes&dur=182.067&lmt=1641642824856930&fexp=24001373%2C24007246&c=WEB&txp=5538434&n=YT4mxb3hxoCnog&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhANjxm6nQ98uzZc5iSnVArgf6LT7TAGRw_RIRUc2H09mCAiEA9CXKpt8t6vsCkV6Q_JIjYhf3IMRWJZK_XmkUqKQJSV4%3D&cms_redirect=yes&mh=xm&mip=103.24.87.96&mm=31&mn=sn-5aap5ojx-jj0z&ms=au&mt=1649914130&mv=m&mvi=3&pl=24&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgQZFJc3gCuR7qAkmAKleJ2wxQX6Opfoy48cGhLpAB-8gCIQCbO-7ZmDsQfNzLLH88rEXPsloWUINi_ZeK57IJS0HHPQ%3D%3D"
          target="_blank"
          download
        >
          Download
        </Link>
        <video
          controls
          src="https://r3---sn-5aap5ojx-jj0z.googlevideo.com/videoplayback?expire=1649936049&ei=UbJXYr3eMM268gS1rKfgBQ&ip=44.200.29.107&id=o-AFfHDmaDAJnECxhF9gDM1YXDO8x5v_LgDFjQVzoB6u_f&itag=18&source=youtube&requiressl=yes&spc=4ocVC4oHcb5YYBddf3RiGHoHG5ShurL23uqViI0Q9Q&vprv=1&mime=video%2Fmp4&ns=cs51_6FZn1lwow3-4p_hMx4G&gir=yes&clen=11591713&ratebypass=yes&dur=182.067&lmt=1641642824856930&fexp=24001373%2C24007246&c=WEB&txp=5538434&n=YT4mxb3hxoCnog&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhANjxm6nQ98uzZc5iSnVArgf6LT7TAGRw_RIRUc2H09mCAiEA9CXKpt8t6vsCkV6Q_JIjYhf3IMRWJZK_XmkUqKQJSV4%3D&cms_redirect=yes&mh=xm&mip=103.24.87.96&mm=31&mn=sn-5aap5ojx-jj0z&ms=au&mt=1649914130&mv=m&mvi=3&pl=24&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgQZFJc3gCuR7qAkmAKleJ2wxQX6Opfoy48cGhLpAB-8gCIQCbO-7ZmDsQfNzLLH88rEXPsloWUINi_ZeK57IJS0HHPQ%3D%3D"
        ></video>
      </div>
    </>
  );
};

export default Blog;
