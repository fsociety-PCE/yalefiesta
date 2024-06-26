"use server";

import { revalidatePath } from "next/cache";
import { SingleForm } from "../models/singleForm";
import { connectToDb } from "./connectToDb";



export const addSingleForm = async (prevState, formData) => {
    try {
        connectToDb();
        const newSingleForm = new SingleForm(formData);

        await newSingleForm.save();
        console.log("saved to db");
        return { success: true };

    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};