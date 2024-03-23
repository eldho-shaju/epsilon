import { Box, Typography } from "@mui/material";
import React from "react";
import useDeviceTypeCheck from "../../Hooks/useDeviceTypeCheck";
import AdminForm from "./adminForm";

const AdminPanel = () => {
  const { isDesktop } = useDeviceTypeCheck();

  return (
    <section>
      <div>
        <h4>Admin</h4>
        <div>
          <AdminForm />
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
