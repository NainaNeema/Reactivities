import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

interface IProps{
    openCreateForm :()=>void;
}

export const NaviBar :React.FC<IProps> = ({openCreateForm}) => {
    return (
        <Menu fixed ='top' inverted>
            <Container>
        <Menu.Item>
            <img src="/assets/logo.png" style={{marginRight:'10px'}} alt ="logo"/>
            Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
            <Button onClick={openCreateForm} positive content="Create Activity"/>
            </Menu.Item>
        </Container>
      </Menu>
    )
}
