import React from "react"
import { ColumnContainer, ColumnTitle } from "../styles"
import { Card } from "./Card"
import { AddNewItem } from "./AddNewItem"

interface ColumnProps {
    title: string
    children?: React.ReactNode
}

export const Column = ({ title }: ColumnProps) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{title}</ColumnTitle>
            <Card text="card"></Card>
            <Card text="card"></Card>
            <Card text="card"></Card>
            <AddNewItem
                toggleButtonText="+ Add another card"
                onAdd={console.log}
                dark={true}
            />
        </ColumnContainer>
    )
}