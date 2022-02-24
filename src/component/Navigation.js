import * as React from "react";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import styled from "styled-components";
import { useEffect } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function SimpleBottomNavigation({ history }) {
  const [value, setValue] = React.useState(0);

  function goMypage() {
    history.push("mypage");
  }

  function goHome() {
    history.push("/");
  }
  function goWrite() {
    history.push("write");
  }
  function goAuth() {
    confirmAlert({
      title: "로그아웃 하시겠습니까?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            localStorage.clear();
            history.push("/oauth");
            window.location.reload();
          },
        },
        {
          label: "No",
          //onClick: () => alert('Click No')
        },
      ],
    });

    // if(result){
    //     localStorage.clear();
    //     history.push("/oauth");
    // }else{
    // }
  }

  useEffect(() => {
    console.log("히스토리 ::", history);
  }, []);

  return (
    <NavWrap>
      <BottomNavigationAction
        onClick={goMypage}
        label="Recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        onClick={goHome}
        label="Favorites"
        icon={<HomeIcon />}
      />
      {/* <BottomNavigationAction onClick={goWrite} label="Favorites" icon={<ModeIcon />} /> */}
      <BottomNavigationAction
        onClick={goAuth}
        label="Nearby"
        icon={<LogoutIcon />}
      />
    </NavWrap>
  );
}

const NavWrap = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  background: #fff;
`;
