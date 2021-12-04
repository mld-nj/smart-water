import { Menu } from "@arco-design/web-react";
import { IconHome, IconCalendar } from "@arco-design/web-react/icon";

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

function BaseMenu(props: any) {
  return (
    <Menu defaultOpenKeys={["1"]} defaultSelectedKeys={["0_1"]} {...props}>
      <MenuItem key="0_1">
        <IconHome />
        Menu 1
      </MenuItem>
      <MenuItem key="0_2">
        <IconCalendar />
        Menu 2
      </MenuItem>
    </Menu>
  );
}
export default BaseMenu;
