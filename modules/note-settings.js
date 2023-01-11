import { tabChecked, tabSettings, userTab } from "./notes/tabs.js";
import { addLocalStorage } from "./notes/addLocalStorage.js";
import { addNote } from "./notes/addNote.js";
import { searchNote } from "./notes/searchNote.js";
import { saveNote } from "./notes/saveNote.js";
import { sortByID } from "./notes/sortByID.js";
import { check } from "./notes/importanceCheckbox.js";

tabChecked();
tabSettings();
addLocalStorage();
addNote();
searchNote();
saveNote();
userTab();
sortByID();
check();
