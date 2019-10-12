class Theme {
    constructor(isInSpaceMode) {
        if (isInSpaceMode) { // SPACE STYLING
            // GENERIC STYLING
            this.titleFontFamily = "'Bungee', monospace";
            this.textFontFamily = "'B612', sans-serif";
            // HEADER
            this.headerTitleColor = "#F0EE5B";
            this.headerTextColor = "white";
            // PROJECTS
            this.projectTitleColor = "#F0EE5B";
            this.projectBackgroundColor = "#141414";
            this.projectTextColor = "#A19AA1";
            // CONTACT
            this.contactBackgroundColor = "#0A0A0A";
            this.contactTitleColor = "#B03342";
            this.labelColor = "#F0EE5B"
            this.inputColor = "#A19AA1";
            this.inputFocusColor = "#F0EE5B";
            this.submitButtonBackground = "#B03342";
            this.submitButtonColor = "#0A0A0A";
            this.errMsgColor = "#A19AA1";
            // FOOTER
            this.footerColor = "#F0EE5B";
            this.copyrightBackground="#B03342"
            this.copyrightColor="black";
        } else { // DEFAULT STYLING
            // GENERIC STYLING
            this.titleFontFamily = "'Permanent Marker', cursive";
            this.textFontFamily = "'B612', sans-serif";
            // HEADER
            this.headerTitleColor = "#5c3987";
            this.headerTextColor = "white";
            // PROJECTS
            this.projectTitleColor = "#efd090";
            this.projectBackgroundColor = "white";
            this.projectTextColor = "black";
            // CONTACT
            this.contactBackgroundColor = "#5C3987";
            this.contactTitleColor = "white";
            this.labelColor = "#efd090"
            this.inputColor = "white";
            this.inputFocusColor = "#efd090";
            this.submitButtonBackground = "#9f8cba";
            this.submitButtonColor = "#5C3987";
            this.errMsgColor = "white";
            // FOOTER
            this.footerColor = "#5c3987";
            this.copyrightBackground="#5c3987";
            this.copyrightColor="white";
        }
    }
}

export default Theme;