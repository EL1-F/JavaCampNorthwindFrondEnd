import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced= "right" src="https://cdn1.ntv.com.tr/gorsel/o1xsumMfG02drIHh1dzONA.jpg?width=1000&mode=both&scale=both&v=1587280799431"></Image>
                <Dropdown pointing="top left" text="Elif">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
