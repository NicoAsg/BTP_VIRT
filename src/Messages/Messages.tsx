import React, { useEffect, useState } from 'react'
import { header_dark } from '../utils/header_dark'

import "./messages.css"

const Messages = (): JSX.Element => {
    const [actualConv, setConv] = useState<JSX.Element>(<div></div>)
    const [listConv, setList] = useState<JSX.Element>(<div></div>)

    useEffect(() => {
        header_dark()
        
        setList(<ListConversations allConversations={ [ conv1, conv2 ] } changeConv={ setConv } />)
        setConv(<Conversation conversation={ conv1 } />)
    }, [setList, setConv])

    const conv1: DataConversation = {
        utilisateur: {
            nom: "Utilisateur 1",
            photo: "/compte/icon_ui_user_circle.png"
        },
        messages: [
            {
                sent: false,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                sent: true,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                sent: true,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                sent: false,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ]
    }

    const conv2: DataConversation = {
        utilisateur: {
            nom: "Utilisateur 2",
            photo: "/compte/icon_ui_user_circle.png"
        },
        messages: [
            {
                sent: true,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                sent: true,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                sent: false,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                sent: true,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ]
    }

    return (
        <div id="messages">
            <h1>Messages</h1>
            <div id="content">
                <div id="list">
                    { listConv }
                </div>
                <div id="detail">
                    { actualConv }
                </div>
            </div>
        </div>
    )
}

interface DataConversation {
    utilisateur: {
        nom: string
        photo: string
    }
    messages: {
        sent: boolean
        content: string
    }[]
}

const Conversation = ({ conversation }: { conversation: DataConversation }): JSX.Element => {
    let listeMessages: JSX.Element[] = []
    for (let i = 0; i < conversation.messages.length; i++) {
        listeMessages.push(
        <div key={ i } className={ conversation.messages[i].sent ? "sent" : "received" }>
            { conversation.messages[i].content }
        </div>
        )
    }

    return (
        <div id="conversation">
            <div id="top">
                <div id="utilisateur">
                    <div id="photo">
                        <img src={ conversation.utilisateur.photo } alt="Photo de profile" />
                    </div>
                    <span>{ conversation.utilisateur.nom }</span>
                </div>
            </div>
            <div id="content">
                { listeMessages }
            </div>
        </div>
    )
}

const ListConversations = ({ allConversations, changeConv }: { allConversations: DataConversation[], changeConv: React.Dispatch<React.SetStateAction<JSX.Element>>}): JSX.Element => {
    const clickConv = (index: number) => {
        changeConv(<Conversation conversation={ allConversations[index] } />)
    }

    let elementsList: JSX.Element[] = []
    for (let i = 0; i < allConversations.length; i++) {
        elementsList.push(
            <div key={ i } className="element" onClick={() => clickConv(i) }>
                <h3>{ allConversations[i].utilisateur.nom }</h3>
                <p>{ allConversations[i].messages[allConversations[i].messages.length - 1].content }</p>
            </div>
        )
    }
    return (
        <div id="messages_liste">
            { elementsList }
        </div>
    )
}

export default Messages