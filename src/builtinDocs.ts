// GENERATED FILE - do not edit by hand.
// Extracted from the 010 Editor manual (https://www.sweetscape.com/010editor/manual/).
// Regenerate with scripts in the repo history if the manual changes.

export interface BuiltinDoc {
    /** Function prototypes (may have several overloads) */
    protos: string[];
    /** Short description from the manual */
    desc: string;
    /** Function category (Interface, I/O, Math, String, Tools) */
    category: string;
    /** Manual page file name for the reference link */
    page: string;
}

export const BUILTIN_DOCS: { [name: string]: BuiltinDoc } = {
    "AddBookmark": {
        "protos": [
            "void AddBookmark(",
            "int64 pos,",
            "string name,",
            "string typename,",
            "int64 arraySize=-1,",
            "int forecolor=cNone,",
            "int backcolor=0xffffc4,",
            "int moveWithCursor=false )"
        ],
        "desc": "Creates a bookmark in the file on which the current Script or Template is being executed (not the actual Script or Template). See Using Bookmarks for information on bookmarks and see Running Templates and Scripts for information on controlling on which file a Script or Template is run.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "AddressFileToLocal": {
        "protos": [
            "int64 AddressFileToLocal( int64 fileAddress )"
        ],
        "desc": "Given fileAddress, an address of a byte in a file, this function converts the address into local coordinates and returns the result. The local coordinate system is a method of referencing bytes in a file where 0 is the first byte and FileSize()-1 is the last byte.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "AddressLocalToFile": {
        "protos": [
            "int64 AddressLocalToFile( int64 localAddress )"
        ],
        "desc": "Almost all functions in scripts and templates use the local coordinate system, where 0 is the first byte in the file and FileSize()-1 is the last byte. This differs from the file coordinate system which uses the addresses as displayed in the Hex Editor.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "Assert": {
        "protos": [
            "void Assert( int value, const char msg[] = \"\" )"
        ],
        "desc": "Stops execution of the script or template if the value is equal to zero. If execution is stopped, the text message msg will be displayed in the Output tab of the Output Window (note that this is an optional argument).",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "ClearClipboard": {
        "protos": [
            "void ClearClipboard()"
        ],
        "desc": "Removes any data that is on the currently active clipboard. See the SetClipboardIndex function to control which clipboard is active.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "CopyBytesToClipboard": {
        "protos": [
            "void CopyBytesToClipboard( uchar buffer[], int size, int charset=CHARSET_ANSI, int bigendian=false )"
        ],
        "desc": "Copies size bytes from the array buffer and places them on the currently active clipboard. If the data being copied represents a string, use the charset parameter to indicate which character set the string uses (see the ConvertString function for a list of character sets).",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "CopyStringToClipboard": {
        "protos": [
            "void CopyStringToClipboard( const char str[], int charset=CHARSET_ANSI )"
        ],
        "desc": "Sets the currently active clipboard to contain the string passed in the str argument. g.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "CopyToClipboard": {
        "protos": [
            "void CopyToClipboard()"
        ],
        "desc": "Copies the currently selected bytes to the active clipboard. See SetSelection to change the selection or SetClipboardIndex to set the active clipboard.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "CutToClipboard": {
        "protos": [
            "void CutToClipboard()"
        ],
        "desc": "Copies the currently selected bytes to the active clipboard and deletes them from the file. See SetSelection to change the selection or SetClipboardIndex to set the active clipboard.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "DeleteFile": {
        "protos": [
            "int DeleteFile( char filename[] )"
        ],
        "desc": "Deletes the file given by filename from disk. Note that the file should not be open in the editor or the delete will fail.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "DisableUndo": {
        "protos": [
            "void DisableUndo()"
        ],
        "desc": "Turns off undo support for a file. This function will speed up a script when writing a large number of changes to a file.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "DisplayFormatBinary": {
        "protos": [
            "void DisplayFormatBinary()"
        ],
        "desc": "Sets the display format of variables in the Inspector to binary, decimal, hexadecimal, or octal. If the format is set to 'decimalhex' then both decimal and hex are displayed with the hex value displayed inside square brackets '[' and ']'.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "DisplayFormatDecimal": {
        "protos": [
            "void DisplayFormatDecimal()"
        ],
        "desc": "Sets the display format of variables in the Inspector to binary, decimal, hexadecimal, or octal. If the format is set to 'decimalhex' then both decimal and hex are displayed with the hex value displayed inside square brackets '[' and ']'.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "DisplayFormatDecimalHex": {
        "protos": [
            "void DisplayFormatDecimalHex()"
        ],
        "desc": "Sets the display format of variables in the Inspector to binary, decimal, hexadecimal, or octal. If the format is set to 'decimalhex' then both decimal and hex are displayed with the hex value displayed inside square brackets '[' and ']'.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "DisplayFormatHex": {
        "protos": [
            "void DisplayFormatHex()"
        ],
        "desc": "Sets the display format of variables in the Inspector to binary, decimal, hexadecimal, or octal. If the format is set to 'decimalhex' then both decimal and hex are displayed with the hex value displayed inside square brackets '[' and ']'.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "DisplayFormatOctal": {
        "protos": [
            "void DisplayFormatOctal()"
        ],
        "desc": "Sets the display format of variables in the Inspector to binary, decimal, hexadecimal, or octal. If the format is set to 'decimalhex' then both decimal and hex are displayed with the hex value displayed inside square brackets '[' and ']'.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "EnableUndo": {
        "protos": [
            "void EnableUndo()"
        ],
        "desc": "Turns back on Undo support for a file after calling DisableUndo. Undo is automatically turned on after the script is finished.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "Exec": {
        "protos": [
            "int Exec( const char program[], const char arguments[], int wait=false )"
        ],
        "desc": "int Exec( const char program[], const char arguments[], int wait, int &errorCode ) Executes an external application using the given program and arguments. Returns 0 if successful or a negative number if an error occurred.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "Exit": {
        "protos": [
            "void Exit( int errorcode )"
        ],
        "desc": "Ends execution of the current script or template and displays the errorcode in the Output tab of the Output panel. Note that usually the keyword return can be used to accomplish the same task unless execution is inside of a custom function.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "ExpandAll": {
        "protos": [
            "void ExpandAll()"
        ],
        "desc": "Recursively opens all tree nodes in the Template Results panel. Variables that have the attribute '<open=suppress>' set will not be opened.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "ExportCSV": {
        "protos": [
            "void ExportCSV( const char filename[] )"
        ],
        "desc": "Writes the contents of the Template Results panel to a file in a comma-delimited format which can be opened in other programs such as Excel. The file is saved to the given filename and the ExpandAll function can be called first to ensure all variables are included in the export.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "ExportXML": {
        "protos": [
            "void ExportXML( const char filename[] )"
        ],
        "desc": "Similar to ExportCSV except the contents of the Template Results panel are written to a file in XML format. The file to write is given by the filename parameter.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "FileClose": {
        "protos": [
            "void FileClose()"
        ],
        "desc": "Closes the current file. No file will be active after this function is called and use the FileSelect function to activate another file.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "FileCount": {
        "protos": [
            "int FileCount()"
        ],
        "desc": "Returns the number of existing file handles. See FileSelect to set the current file.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "FileExists": {
        "protos": [
            "int FileExists( const char filename[] )"
        ],
        "desc": "Returns true if the given file name exists on disk, or false if it does not.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "FileNew": {
        "protos": [
            "int FileNew( char editAs[]=\"\", int makeActive=true )"
        ],
        "desc": "Creates a new file in the editor and returns the index of the created file (see GetFileNum). If the editAs parameter is not empty, the created file will be assigned that Edit As the same as using the SetFileInterface function (for example, \"Hex\", \"Text\", or \"Unicode\").",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "FileOpen": {
        "protos": [
            "int FileOpen( const char filename[], int runTemplate=false, char editAs[]=\"\", int openDuplicate=false )"
        ],
        "desc": "Opens the file specified by the UTF-8 encoded string filename into the editor. If runTemplate is true and a Template is associated with that file (see Template Options), the Template will be run on the file.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "FileSave": {
        "protos": [
            "int FileSave()"
        ],
        "desc": "int FileSave( const char filename[] ) int FileSave( const wchar_t filename[] ) Saves the current file to the given file name. The file name can be either a UTF-8 string or a wide string.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "FileSaveRange": {
        "protos": [
            "int FileSaveRange( const char filename[], int64 start, int64 size )"
        ],
        "desc": "int FileSaveRange( const wchar_t filename[], int64 start, int64 size ) Similar to the FileSave function except that only part of the file is written to disk. size bytes starting from the local address start are written to the given filename and filename can be given in UTF-8 or Unicode format.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "FileSelect": {
        "protos": [
            "void FileSelect( int index )"
        ],
        "desc": "Only one file can be active at a time and all of the Read/Write operations occur on that file. Use FileSelect to select a different file to be the current file.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "FindOpenFile": {
        "protos": [
            "int FindOpenFile( const char path[] )"
        ],
        "desc": "Searches through the list of all open files to see if the file indicated by path is currently open. If the file is open, the index of the file is returned which can be used with the FileSelect function.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "FindOpenFileW": {
        "protos": [
            "int FindOpenFileW( const wchar_t path[] )"
        ],
        "desc": "Searches through the list of all open files to see if the file indicated by path is currently open. If the file is open, the index of the file is returned which can be used with the FileSelect function.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetArg": {
        "protos": [
            "char[] GetArg( int index )"
        ],
        "desc": "Returns an argument passed to a script or a template from the command line. The GetArg function returns an ASCII string and the GetArgW function returns a wide string.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetArgW": {
        "protos": [
            "wchar_t[] GetArgW( int index )"
        ],
        "desc": "Returns an argument passed to a script or a template from the command line. The GetArg function returns an ASCII string and the GetArgW function returns a wide string.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetBackColor": {
        "protos": [
            "int GetBackColor()"
        ],
        "desc": "Returns the currently active background color for template variables. See SetBackColor for more information.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetBookmarkArraySize": {
        "protos": [
            "int GetBookmarkArraySize( int index )"
        ],
        "desc": "If the bookmark specified by index is an array this function returns the number of elements in the array, otherwise this function returns -1. index should be greater or equal to zero and less than the value returned by GetNumBookmarks.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetBookmarkBackColor": {
        "protos": [
            "int GetBookmarkBackColor( int index )"
        ],
        "desc": "This function returns an integer representing the background color of the bookmark specified by index. index should be zero or greater and less than the number of bookmarks (see GetNumBookmarks).",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetBookmarkForeColor": {
        "protos": [
            "int GetBookmarkForeColor( int index )"
        ],
        "desc": "Returns an integer representing the foreground (text) color of the bookmark indicated by the index parameter. A return value of cNone means that the foreground color is not changed.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetBookmarkMoveWithCursor": {
        "protos": [
            "int GetBookmarkMoveWithCursor( int index )"
        ],
        "desc": "This function returns true if the bookmark specified by index is set to move around the file as the cursor/caret moves (a floating bookmark). False is returned if this is not a floating bookmark.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetBookmarkName": {
        "protos": [
            "string GetBookmarkName( int index )"
        ],
        "desc": "Returns a string which contains the name of a bookmark. index controls which bookmark name is returned and the value of index should be greater or equal to zero, and less than the number of bookmarks (see GetNumBookmarks).",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetBookmarkPos": {
        "protos": [
            "int64 GetBookmarkPos( int index )"
        ],
        "desc": "Returns the starting address of a bookmark and the bookmark returned is specified using the index argument. index should be greater or equal to zero, and less than the number of bookmarks (see GetNumBookmarks).",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetBookmarkType": {
        "protos": [
            "string GetBookmarkType( int index )"
        ],
        "desc": "This function returns a string representing the type of data stored by the given bookmark (for example, \"char\" or \"int\"). The index parameter must be greater or equal to zero and less than the value returned by GetNumBookmarks.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetBytesPerLine": {
        "protos": [
            "int GetBytesPerLine()"
        ],
        "desc": "Returns the number of bytes displayed per line in the current Hex Editor Window. This value is by default 16, but may change depending upon the current settings in the View Menu.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetClipboardBytes": {
        "protos": [
            "int GetClipboardBytes( uchar buffer[], int maxBytes )"
        ],
        "desc": "Reads data from the currently active clipboard into the given buffer. At most maxBytes bytes will be read from the clipboard and the buffer array must be large enough to hold maxBytes bytes.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetClipboardIndex": {
        "protos": [
            "int GetClipboardIndex()"
        ],
        "desc": "Returns the index of the currently active clipboard. A return value of 0 means the standard system clipboard is chosen and a value of 1 to 9 inclusive means a custom clipboard is chosen.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetClipboardString": {
        "protos": [
            "string GetClipboardString()"
        ],
        "desc": "If the active clipboard currently contains a string, this string will be returned by the GetClipboardString function. If the data on the clipboard cannot be converted to a string, an empty string will be returned.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetCurrentTime": {
        "protos": [
            "string GetCurrentTime( char format[] = \"hh:mm:ss\" )"
        ],
        "desc": "Returns a string representing the current time in the format \"hh:mm:ss\" by default (note this is using the 24-hour clock). For information on different formats that can be used see the GetCurrentDateTime function and to use the current application time format see the GetDefaultTimeFormat function.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetCurrentDate": {
        "protos": [
            "string GetCurrentDate( char format[] = \"MM/dd/yyyy\" )"
        ],
        "desc": "Returns a string representing the current date in the format \"MM/dd/yyyy\" by default. For information on different formats that can be used see the GetCurrentDateTime function and to use the current application date format see GetDefaultDateFormat.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetCurrentDateTime": {
        "protos": [
            "string GetCurrentDateTime( char format[] = \"MM/dd/yyyy hh:mm:ss\" )"
        ],
        "desc": "Returns a string representing the current date and time in the format \"MM/dd/yyyy hh:mm:ss\" by default (note this is using the 24-hour clock). g.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetCursorPos": {
        "protos": [
            "int64 GetCursorPos()"
        ],
        "desc": "Returns the address of the cursor/caret in the file in local coordinates.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetDefaultDateFormat": {
        "protos": [
            "string GetDefaultDateFormat()"
        ],
        "desc": "Returns the default date format for the application as set in the Inspector/Tables Options dialog. This date format is used in the Inspector and the Template Results.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetDefaultDateTimeFormat": {
        "protos": [
            "string GetDefaultDateTimeFormat()"
        ],
        "desc": "Returns a string containing the default date format followed a single space followed by the default time format. Both date and time formats can be set using the Inspector/Tables Options dialog.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetDefaultTimeFormat": {
        "protos": [
            "string GetDefaultTimeFormat()"
        ],
        "desc": "Returns the default time format set in the Inspector/Tables Options dialog. This time format is used in the Inspector and the Template Results.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetDisplayFormat": {
        "protos": [
            "int GetDisplayFormat()"
        ],
        "desc": "Returns an integer representing the current display format. The display format controls how a numeric variable is displayed in the Template Results or Inspector.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetEnv": {
        "protos": [
            "char[] GetEnv( const char str[] )"
        ],
        "desc": "Attempts to locate the system environment variable indicated by str. If the environment variable is found, the value of the environment variable is returned as a UTF-8 string and if it could not be found an empty string is returned.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetFileAttributesUnix": {
        "protos": [
            "int GetFileAttributesUnix()"
        ],
        "desc": "Returns the file attributes of a file on a Unix or Macintosh operating system as a bit flag. The resulting value has nine different flags: read, write and execute for each of the areas user, group, and other.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetFileAttributesWin": {
        "protos": [
            "int GetFileAttributesWin()"
        ],
        "desc": "Returns the file attributes of a file on a Windows operating system as a bit flag.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetFileCharSet": {
        "protos": [
            "int GetFileCharSet()"
        ],
        "desc": "Returns an integer representing the character set of the current file. The list of possible character sets is available in the ConvertString function.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetFileInterface": {
        "protos": [
            "char[] GetFileInterface()"
        ],
        "desc": "Returns a string representing the Edit As of the current file. The current Edit As is listed in the status bar (for example: \"Hex\", \"Text\", or \"Unicode\").",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetFileName": {
        "protos": [
            "char[] GetFileName()"
        ],
        "desc": "Returns a string representing the file name of the current file including the path. The string is returned in UTF-8 format.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetFileNameW": {
        "protos": [
            "wchar_t[] GetFileNameW()"
        ],
        "desc": "Returns a wide string which contains the file name of the current file including the path.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetFileNum": {
        "protos": [
            "int GetFileNum()"
        ],
        "desc": "Each open file is assigned a index from 0 up to FileCount()-1. This function returns the index of the current file.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetForeColor": {
        "protos": [
            "int GetForeColor()"
        ],
        "desc": "Returns the currently active foreground (text) color for template variables. See SetForeColor for more information.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetKeepFileTime": {
        "protos": [
            "int GetKeepFileTime()"
        ],
        "desc": "Returns true if keep file time is enabled for the current file. If keep file time is turned on for a file and the file is saved, the modified file time as stored on a hard drive will not be changed.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetMouseWheelScrollSpeed": {
        "protos": [
            "int GetMouseWheelScrollSpeed()"
        ],
        "desc": "Returns the number of lines that are scrolled every time a mouse scroll wheel is clicked ahead or back. The scroll speed can be controlled with the Editor Options dialog or with the SetMouseWheelScrollSpeed function.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetNumArgs": {
        "protos": [
            "int GetNumArgs()"
        ],
        "desc": "Returns the number of arguments that were passed to this script or template from the command line. The individual arguments can be accessed using the GetArg and GetArgW functions.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetNumBookmarks": {
        "protos": [
            "int GetNumBookmarks()"
        ],
        "desc": "Returns the number of bookmarks set for the file that the current Script or Template is being run on (see Running Templates and Scripts for more information on choosing which file to run a Template or Script on). See the AddBookmark function for information on creating bookmarks.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetReadOnly": {
        "protos": [
            "int GetReadOnly()"
        ],
        "desc": "Returns true if the file is marked as read-only, or false if the file can be modified.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetScriptName": {
        "protos": [
            "char[] GetScriptName()"
        ],
        "desc": "These functions return the name of the script that is currently being executed. This name is calculated by taking the full file name of the script and removing the path information.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetScriptNameW": {
        "protos": [
            "wchar_t[] GetScriptNameW()"
        ],
        "desc": "These functions return the name of the script that is currently being executed. This name is calculated by taking the full file name of the script and removing the path information.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetScriptFileName": {
        "protos": [
            "char[] GetScriptFileName()"
        ],
        "desc": "When a script is being executed, these functions return the full file name of the script being run. GetScriptFileName returns a UTF-8 string and GetScriptFileNameW returns a Unicode string.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetScriptFileNameW": {
        "protos": [
            "wchar_t[] GetScriptFileNameW()"
        ],
        "desc": "When a script is being executed, these functions return the full file name of the script being run. GetScriptFileName returns a UTF-8 string and GetScriptFileNameW returns a Unicode string.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetSelSize": {
        "protos": [
            "int64 GetSelSize()"
        ],
        "desc": "Returns the number of bytes that have been selected. Returns 0 if no selection is made.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetSelStart": {
        "protos": [
            "int64 GetSelStart()"
        ],
        "desc": "Returns the start address of the selection in local coordinates. Use GetSelSize to determine if a selection has been made.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetStartingAddress": {
        "protos": [
            "int64 GetStartingAddress()"
        ],
        "desc": "Returns the starting address of the file in file coordinates. This is the address of the first byte in the file as displayed in the Hex Editor.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetStyle": {
        "protos": [
            "int GetStyle()"
        ],
        "desc": "Returns the currently active style for template variables as set by the SetStyle function. If a style has been set then one of the constants listed in the Template Styles section is returned.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetStyleBackColor": {
        "protos": [
            "int GetStyleBackColor( int style )"
        ],
        "desc": "Returns the background color that is currently associated with the given style constant. A list of available template style constants is given in the Template Styles section.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetStyleForeColor": {
        "protos": [
            "int GetStyleForeColor( int style )"
        ],
        "desc": "Returns the foreground (text) color that is associated with the given style constant. See the Template Styles section for a list of style constants.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetTempDirectory": {
        "protos": [
            "string GetTempDirectory()"
        ],
        "desc": "Returns a string representing the current temporary directory set using the Directory Options dialog. g.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetTempFileName": {
        "protos": [
            "char[] GetTempFileName()"
        ],
        "desc": "Returns the full path of a file that can be used as a temporary file. The file will be in the current temporary directory and will be guaranteed not to exist.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetTemplateName": {
        "protos": [
            "char[] GetTemplateName()"
        ],
        "desc": "These functions operate by taking the full template file name as returned from the functions GetTemplateFileName or GetTemplateFileNameW, removing the path information and returning the result. bt'.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetTemplateNameW": {
        "protos": [
            "wchar_t[] GetTemplateNameW()"
        ],
        "desc": "These functions operate by taking the full template file name as returned from the functions GetTemplateFileName or GetTemplateFileNameW, removing the path information and returning the result. bt'.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetTemplateFileName": {
        "protos": [
            "char[] GetTemplateFileName()"
        ],
        "desc": "When run in a Template, these functions return the full file name of the Template that is being run. When run in a Script, these functions return the full file name of the Template that has been associated with the target file, or an empty string if there is no associated Template.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetTemplateFileNameW": {
        "protos": [
            "wchar_t[] GetTemplateFileNameW()"
        ],
        "desc": "When run in a Template, these functions return the full file name of the Template that is being run. When run in a Script, these functions return the full file name of the Template that has been associated with the target file, or an empty string if there is no associated Template.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetUnoptimizedArraysCollapsible": {
        "protos": [
            "int GetUnoptimizedArraysCollapsible()"
        ],
        "desc": "Returns true if unoptimized arrays are displayed with a parent node that can be opened or closed in the Template Results. See Optimizing Arrays of Structs for more information.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetWorkingDirectory": {
        "protos": [
            "char[] GetWorkingDirectory()"
        ],
        "desc": "Returns the full path of the current working directory for the application. The last character of the directory will be a slash and the current working directory can be set using the SetWorkingDirectory and SetWorkingDirectoryW functions.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "GetWorkingDirectoryW": {
        "protos": [
            "wchar_t[] GetWorkingDirectoryW()"
        ],
        "desc": "Returns the full path of the current working directory for the application. The last character of the directory will be a slash and the current working directory can be set using the SetWorkingDirectory and SetWorkingDirectoryW functions.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "HighlightAllowInstanceSharing": {
        "protos": [
            "void HighlightAllowInstanceSharing( int allowSharing )"
        ],
        "desc": "Instance sharing is used for Syntax Highlighters to make loading of syntax highlighters faster and use less memory. When allowSharing is true then all files in 010 Editor that use this syntax highlighter share a single copy of the compiled template in memory.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "HighlightApplyColor": {
        "protos": [
            "void HighlightApplyColor(",
            "int foreColors[],",
            "int backColors[],",
            "int start,",
            "int count,",
            "int foreColor,",
            "int backColor )"
        ],
        "desc": "Given an array of foreground colors foreColors, this function sets count colors starting at position start to the color foreColor. count colors in the backColors array beginning at the start index are also set to the color backColor.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "HighlightApplyStyle": {
        "protos": [
            "void HighlightApplyStyle(",
            "int foreColors[],",
            "int backColors[],",
            "int start,",
            "int count,",
            "int styleIndex )"
        ],
        "desc": "Sets count colors in the arrays foreColors and backColors to the style styleIndex, starting at index start. If the style has a foreground or background color of -1 (none) then those colors are not applied.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "HighlightBuildKeywordList": {
        "protos": [
            "TKeywordList HighlightBuildKeywordList(",
            "int options,",
            "string str1 [, string str2, ... ] )"
        ],
        "desc": "This function builds a TKeywordList structure out of the options paramater and a list of one or more strings. Once the TKeywordList structure is built it can be used in the HighlightCheckKeywordRule or HighlightMatchKeyword functions to quickly check if text matches a number of different keywords.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "HighlightBytesRealtime": {
        "protos": [
            "virtual void HighlightBytesRealtime(",
            "int64 pos,",
            "uchar bytes[],",
            "int foreColors[],",
            "int backColors[],",
            "int count )"
        ],
        "desc": "This is a special virtual function. When this function is implemented inside a Binary Template, the function will be called for hex files every time a block of data is to be displayed in the editor.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "HighlightCheckCommentRule": {
        "protos": [
            "int HighlightCheckCommentRule(",
            "wchar_t text[],",
            "int count,",
            "wstring target,",
            "int &pos,",
            "int foreColors[],",
            "int backColors[],",
            "int styleIndex,",
            "int options=0 )"
        ],
        "desc": "Applies a single-line comment rule to a line of text of size count. If the target string is found at position pos then the color styleIndex is applied to foreColors and backColors from pos to the end of the line.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "HighlightCheckKeywordRule": {
        "protos": [
            "int HighlightCheckKeywordRule(",
            "wchar_t text[],",
            "int count,",
            "TKeywordList &keywords,",
            "int &pos,",
            "int foreColors[],",
            "int backColors[],",
            "int styleIndex,",
            "int options=0 )"
        ],
        "desc": "This function checks if a set of keywords matches the text array of size count starting at position pos. The keywords structure is created with the HighlightBuildKeywordList function.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "HighlightCheckMultiLineRule": {
        "protos": [
            "int HighlightCheckMultiLineRule(",
            "wchar_t text[],",
            "int count,",
            "wstring startKeyword,",
            "wstring endKeyword,",
            "int &pos,",
            "int &rule,",
            "int ruleStart,",
            "int ruleTarget,",
            "int foreColors[],",
            "int backColors[],",
            "int styleIndex,",
            "int options=0 )"
        ],
        "desc": "Similar to HighlightCheckSingleLineRule except that this function can be used to apply coloring that spans several lines such as a multi-line comment. Multi-line coloring is achieved through the rule parameter which is assumed to be saved in the flags paramater of the HighlightLineRealtime function.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "HighlightCheckSingleLineRule": {
        "protos": [
            "int HighlightCheckSingleLineRule(",
            "wchar_t text[],",
            "int count,",
            "wstring startKeyword,",
            "wstring endKeyword,",
            "int &pos,",
            "int foreColors[],",
            "int backColors[],",
            "int styleIndex,",
            "int options=0 )"
        ],
        "desc": "Applies syntax highlighting to a single line of text of size count. The styleIndex color is applied to the array foreColors and backColors if the startKeyword string is found at position pos.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "HighlightCheckTagRule": {
        "protos": [
            "int HighlightCheckTagRule(",
            "wchar_t text[],",
            "int count,",
            "wstring startKeyword,",
            "wstring endKeyword,",
            "int &pos,",
            "int &rule,",
            "int ruleStart,",
            "int ruleTarget,",
            "int foreColors[],",
            "int backColors[],",
            "int styleIndex,",
            "int &foundName,",
            "int options=0 )"
        ],
        "desc": "Used to apply coloring to tags in an XML or HTML file but could be used for a variety of other coloring as well. This function applies coloring to just startKeyword and endKeyword whereas HighlightCheckMultiLineRule colors everything in between as well.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "HighlightCheckTagTokenRule": {
        "protos": [
            "int HighlightCheckTagTokenRule(",
            "wchar_t text[],",
            "int count,",
            "int &pos,",
            "int foreColors[],",
            "int backColors[],",
            "int tagStyle,",
            "int nameStyle,",
            "int attributeStyle,",
            "int &foundName )"
        ],
        "desc": "Used as a convenience function for coloring text inside a tag, such as used in XML or HTML. The next token is extracted from the text of size count similar to the HighlightGetNextToken function.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "HighlightColorPattern": {
        "protos": [
            "void HighlightColorPattern(",
            "int start,",
            "int end,",
            "int foreColors[],",
            "int backColors[],",
            "int count,",
            "int patternSize1, int foreColor1, int backColor1",
            "[, int patternSize2, int foreColor2, int backColor2, ...] )"
        ],
        "desc": "Applies a repeating color pattern to a block of bytes. This function is useful to apply coloring to a hex file when using the HighlightBytesRealtime function.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "HighlightFindString": {
        "protos": [
            "int HighlightFindString(",
            "wchar_t text[],",
            "int count,",
            "wstring target,",
            "int start,",
            "int &matchlen,",
            "int options=0 )"
        ],
        "desc": "Attempts to locate the string target in the array text of size count characters. The search starts at index start.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "HighlightFindStyle": {
        "protos": [
            "int HighlightFindStyle(",
            "string styleName,",
            "int lightForeColor=-1,",
            "int lightBackColor=-1,",
            "int darkForeColor=-1,",
            "int darkBackColor=-1 )"
        ],
        "desc": "Returns the index of the style with name styleName in the list of Syntax Styles as located in the Theme/Color Options dialog. This style index can be used with other functions such as HighlightGetStyleForeColor, HighlightGetStyleBackColor, HighlightApplyStyle, HighlightCheckCommentRule, etc.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "HighlightGetNextToken": {
        "protos": [
            "int HighlightGetNextToken( wchar_t text[], int count, int start, int splitAlphaNum=1 )"
        ],
        "desc": "This function is used to divide up a line of text into a series of tokens to check for syntax highlighting. Given a text array of size count, this function starts scanning at index start and returns the index of the first character that has a different character class than the character at start.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "HighlightGetStyleForeColor": {
        "protos": [
            "int HighlightGetStyleForeColor( int styleIndex )"
        ],
        "desc": "Returns the foreground (text) color for a styleIndex. The styleIndex parameter can be obtained using the HighlightFindStyle function.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "HighlightGetStyleBackColor": {
        "protos": [
            "int HighlightGetStyleBackColor( int styleIndex )"
        ],
        "desc": "Returns the background color for a styleIndex. The styleIndex parameter can be obtained using the HighlightFindStyle function.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "HighlightLineRealtime": {
        "protos": [
            "virtual void HighlightLineRealtime(",
            "int64 line,",
            "wchar_t text[],",
            "int foreColors[],",
            "int backColors[],",
            "int count,",
            "ushort &flags )"
        ],
        "desc": "This is a special virtual function. When this function is implemented in a Binary Template then that Template is used for Syntax Highlighting a text file.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "HighlightMatchKeyword": {
        "protos": [
            "int HighlightMatchKeyword(",
            "TKeywordList &keywords,",
            "wchar_t text[],",
            "int count,",
            "int start,",
            "int options=0 )"
        ],
        "desc": "Given a keywords structure as created by HighlightBuildKeywordList, this function returns true if any of the keywords match the text array of size count starting at position start. If a match is found the number of matching characters is returned, otherwise the function returns 0.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "HighlightMatchString": {
        "protos": [
            "void HighlightMatchString(",
            "wchar_t text[],",
            "int count,",
            "wstring target,",
            "int start,",
            "int options=0 )"
        ],
        "desc": "Given a line of text text of size count, this function checks if the string target exists at position start. If a match is found the number of matching characters is returned otherwise zero is returned.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "InputDirectory": {
        "protos": [
            "char[] InputDirectory( const char title[], const char defaultDir[]=\"\" )"
        ],
        "desc": "Allows the user to choose a directory using the standard system directory select dialog. The title string is displayed in the title bar of the dialog.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "InputFloat": {
        "protos": [
            "double InputFloat(",
            "const char title[],",
            "const char caption[],",
            "const char defaultValue[] )"
        ],
        "desc": "Opens up a dialog with a single edit box. The title displays in the title bar of the dialog and the caption displays above the edit box.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "InputNumber": {
        "protos": [
            "int InputNumber(",
            "const char title[],",
            "const char caption[],",
            "const char defaultValue[] )"
        ],
        "desc": "Similar to InputFloat except an integer is returned instead of a float value. If an invalid number is entered or Cancel is pressed, the constant BAD_VALUE is returned.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "InputOpenFileName": {
        "protos": [
            "char[] InputOpenFileName(",
            "char title[],",
            "char filter[]=\"All files (*)\",",
            "char filename[]=\"\" )"
        ],
        "desc": "Shows a standard file open dialog box with the caption title. The filter controls which file masks are available in the File Type drop-down list.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "InputOpenFileNames": {
        "protos": [
            "TOpenFileNames InputOpenFileNames(",
            "char title[],",
            "char filter[]=\"All files (*)\",",
            "char filename[]=\"\" )"
        ],
        "desc": "Similar to InputOpenFileName except that multiple files may be selected. The results are returned in a structure TOpenFileNames that contains a count variable indicating the number of opened files (zero if cancel was pressed), and an array of file variables which each have a UTF-8 filename variable indicating the selected file.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "InputRadioButtonBox": {
        "protos": [
            "int InputRadioButtonBox(",
            "const char title[],",
            "const char caption[],",
            "int defaultIndex,",
            "const char str1[], const char str2[], const char str3[]=\"\",",
            "const char str4[]=\"\", const char str5[]=\"\", const char str6[]=\"\",",
            "const char str7[]=\"\", const char str8[]=\"\", const char str9[]=\"\",",
            "const char str10[]=\"\", const char str11[]=\"\", const char str12[]=\"\",",
            "const char str13[]=\"\", const char str14[]=\"\", const char str15[]=\"\" )"
        ],
        "desc": "Displays a dialog box containing a number of radio buttons which allows a user to pick one choice from a list of options. The title string is displayed in the title bar and the caption string is displayed above the first radio button.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "InputSaveFileName": {
        "protos": [
            "char[] InputSaveFileName(",
            "char title[],",
            "char filter[]=\"All files (*)\",",
            "char filename[]=\"\",",
            "char extension[]=\"\" )"
        ],
        "desc": "Uses a standard file save dialog box to select a file name suitable to use when saving a file. The user will be asked to overwrite a file if it already exists on disk.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "InputString": {
        "protos": [
            "char[] InputString(",
            "const char title[],",
            "const char caption[],",
            "const char defaultValue[] )"
        ],
        "desc": "Similar to InputFloat except that the string value of the edit box is returned instead of a float value. If Cancel is pressed, an empty string is returned.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "InputWString": {
        "protos": [
            "wstring InputWString(",
            "const char title[],",
            "const char caption[],",
            "const wstring defaultValue )"
        ],
        "desc": "Displays a dialog for the user to enter a wide string (unicode string). See the InputFloat function for an explanation of the different arguments.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "InsertFile": {
        "protos": [
            "int InsertFile( const char filename[], int64 position )"
        ],
        "desc": "Inserts all of the bytes in the file given by filename into the current file starting at local address position. A negative number is returned if the file cannot be inserted.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "IsEditorFocused": {
        "protos": [
            "int IsEditorFocused()"
        ],
        "desc": "Returns true if a Editor Window is currently focused. This function is useful if you want to build a script that controls the cursor/caret of the Editor Window and only want the caret to move when the window is focused.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "IsModified": {
        "protos": [
            "int IsModified()"
        ],
        "desc": "Returns true if any changes have been made to the file, or false otherwise.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "IsNoUIMode": {
        "protos": [
            "int IsNoUIMode()"
        ],
        "desc": "Returns true if 010 Editor is currently in -noui mode, or false otherwise. See Command Line Parameters for more information on -noui mode.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "IsUndoEnabled": {
        "protos": [
            "int IsUndoEnabled()"
        ],
        "desc": "Returns true if undo is enabled for the current script. Undo can be turned on or off using the functions EnableUndo and DisableUndo.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "MessageBox": {
        "protos": [
            "int MessageBox( int mask, const char title[], const char format[] [, argument, ... ] )"
        ],
        "desc": "Displays a message box to the user with a number of buttons to press. The buttons displayed depend upon an OR mask of four values.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "OffsetClear": {
        "protos": [
            "void OffsetClear()"
        ],
        "desc": "Removes any offset or any size limit that has been set for the current template. This function is identical to calling OffsetSetLimitSize(0) and OffsetSetStart(0).",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "OffsetGetLimitSize": {
        "protos": [
            "int64 OffsetGetLimitSize()"
        ],
        "desc": "Templates can be run on just a section of a file instead of the whole file. If a size limit is set for a file, then a template can only access data in the file from offset up to offset + size limit - 1.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "OffsetGetStart": {
        "protos": [
            "int64 OffsetGetStart()"
        ],
        "desc": "Instead of running a template on a whole data file, a template may be run on just part of the file by specifying an offset and a size limit. Offsets may be set using the Run Template dialog as described in the Running Templates at an Offset help topic.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "OffsetSetLimitSize": {
        "protos": [
            "void OffsetSetLimitSize( int64 sizelimit )"
        ],
        "desc": "Sets the size limit of the current file to sizelimit. This allows a template to be run on only part of a data file instead of the whole data file.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "OffsetSetStart": {
        "protos": [
            "void OffsetSetStart( int64 start )"
        ],
        "desc": "An offset can be set for a template which allows the template to be run on just part of a data file instead of the whole file. Calling this function sets the template offset to start meaning the template can only access data in the data file starting at local address start.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "OutputPaneClear": {
        "protos": [
            "void OutputPaneClear()"
        ],
        "desc": "The Output Pane refers to the area where text from the Printf function is displayed (located in the Output tab of the Output Window). When this function is called, all previous output in the Output Pane is cleared.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "OutputPaneSave": {
        "protos": [
            "int OutputPaneSave( const char filename[] )"
        ],
        "desc": "Saves all text in the Output tab of the Output Window to a file on disk. The filename argument gives the name of the target output file.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "OutputPaneCopy": {
        "protos": [
            "void OutputPaneCopy()"
        ],
        "desc": "Copies the text in the Output tab of the Output Window to the operating system clipboard.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "PasteFromClipboard": {
        "protos": [
            "void PasteFromClipboard()"
        ],
        "desc": "Inserts any bytes in the currently active clipboard into the file starting at the current cursor/caret position. If a selection has been made, the selected bytes will be deleted before the bytes are inserted.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "Printf": {
        "protos": [
            "int Printf( const char format[] [, argument, ... ] )"
        ],
        "desc": "Similar to the standard C printf function. Accepts a format specifier and a series of arguments.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "ProcessGetHeapLocalAddress": {
        "protos": [
            "int64 ProcessGetHeapLocalAddress( int index )"
        ],
        "desc": "Each memory heap in a process is assigned a position in the current file. This function returns the starting local file address for the heap given by index.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "ProcessGetHeapModule": {
        "protos": [
            "wchar_t[] ProcessGetHeapModule( int index )"
        ],
        "desc": "Returns the name of the module to which the given memory heap belongs. The module name is returned as a wide string and index must be between 0 and ProcessGetNumHeaps()-1.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "ProcessGetHeapSize": {
        "protos": [
            "int ProcessGetHeapSize( int index )"
        ],
        "desc": "Returns the size in number of bytes for the heap given by index. index must be between 0 and ProcessGetNumHeaps()-1.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "ProcessGetHeapStartAddress": {
        "protos": [
            "int64 ProcessGetHeapStartAddress( int index )"
        ],
        "desc": "Returns the starting address in memory for the heap given by index. index must be between 0 and ProcessGetNumHeaps()-1.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "ProcessGetNumHeaps": {
        "protos": [
            "int ProcessGetNumHeaps()"
        ],
        "desc": "Returns the number of memory heaps for the current process. If the current file is not a process, 0 is returned.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "ProcessHeapToLocalAddress": {
        "protos": [
            "int64 ProcessHeapToLocalAddress( int64 memoryAddress )"
        ],
        "desc": "Each heap in a process has two addresses: a memory address where the data actually exists in computer memory and a local file address where the data is located when using scripts and templates. Given an address memoryAddress in system memory, this function returns the equivalent address in the local file.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "ProcessLocalToHeapAddress": {
        "protos": [
            "int64 ProcessLocalToHeapAddress( int64 localAddress )"
        ],
        "desc": "Each heap in a process has two addresses: a memory address where the data actually exists in computer memory and a local file address where the data is located when using scripts and templates. Given an address localAddress in the local file, this function returns the equivalent address in system memory.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "ProjectClose": {
        "protos": [
            "void ProjectClose()"
        ],
        "desc": "Closes the current project. This function can only be run in a script and note that since closing a project could cause the current script to be closed, the project is not closed until the script has finished execution.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "ProjectOpen": {
        "protos": [
            "void ProjectOpen( const char filename[] )"
        ],
        "desc": "Loads the project specified by filename and filename should be in UTF-8 format. If the project has an associated workspace then all current files are closed and all the files in the workspace are opened.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "RemoveBookmark": {
        "protos": [
            "void RemoveBookmark( int index )"
        ],
        "desc": "Removes a bookmark from the current file. The index argument specifies which bookmark to remove and its value should be greater or equal to zero, and less than the number of bookmarks (see GetNumBookmarks).",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "RenameFile": {
        "protos": [
            "int RenameFile( const char originalname[], const char newname[] )"
        ],
        "desc": "Renames a file on disk from originalname to newname. Note that the file should not be open in the editor when it is renamed.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "RequiresFile": {
        "protos": [
            "void RequiresFile()"
        ],
        "desc": "Scripts can either be run with a target file or without a target file (select \"(none)\" in the Run on File section when editing a Script to run it without a target file). If this function is called and the current script is being run without a target file, a runtime error will be displayed and the script will be stopped.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "RequiresVersion": {
        "protos": [
            "void RequiresVersion( int majorVer, int minorVer=0, int revision=0 )"
        ],
        "desc": "Indicates what version of 010 Editor is required to execute the current script or template. The execution of the script or template will stop if the current version of 010 Editor is less than the version number given by the majorVer, minorVer, and reversion parameters.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "RunTemplate": {
        "protos": [
            "void RunTemplate( const char filename[]=\"\", int clearOutput=false )"
        ],
        "desc": "This function can be called in a Script to execute a Template on the current file. The filename argument indicates which Template file to run and the filename can either be a full file path, or can be just the name of the file and 010 Editor will attempt to locate the Template using the same rules as locating Include files.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "SetBackColor": {
        "protos": [
            "void SetBackColor( int color )"
        ],
        "desc": "These functions are used when writing a Template to apply color to different variables. All variables defined after calling one of these functions will be displayed in the given color.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "SetColor": {
        "protos": [
            "void SetColor( int forecolor, int backcolor )"
        ],
        "desc": "These functions are used when writing a Template to apply color to different variables. All variables defined after calling one of these functions will be displayed in the given color.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "SetForeColor": {
        "protos": [
            "void SetForeColor( int color )"
        ],
        "desc": "These functions are used when writing a Template to apply color to different variables. All variables defined after calling one of these functions will be displayed in the given color.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "SetBytesPerLine": {
        "protos": [
            "void SetBytesPerLine( int bytesPerLine )"
        ],
        "desc": "When displaying a file in the Hex Editor, calling this function allows overriding the number of bytes per line of the editor. Usually the number of bytes per line comes from the current Edit As and is set using the 'View > Line Width' menu.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "SetClipboardIndex": {
        "protos": [
            "int SetClipboardIndex( int index )"
        ],
        "desc": "Sets which clipboard is the currently active clipboard. An index value of 0 indicates the normal system clipboard and a value of 1 through 9 indicates one of the custom clipboards.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "SetCursorPos": {
        "protos": [
            "void SetCursorPos( int64 pos )"
        ],
        "desc": "Sets the cursor/caret position in the current file to local address pos. A flashing caret will visually indicate the cursor position in the file.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "SetDisplayFormat": {
        "protos": [
            "void SetDisplayFormat( int format )"
        ],
        "desc": "Sets the current variable display format to format and see GetDisplayFormat for a list of constants that can be passed to this function. The functions DisplayFormatBinary, DisplayFormatDecimal, DisplayFormatHex, DisplayFormatDecimalHex, or DisplayFormatOctal should generally be used instead of this function.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "SetEnv": {
        "protos": [
            "int SetEnv( const char str[], const char value[] )"
        ],
        "desc": "Attempts to set the system environment variable indicated by str to the given value (both str and value are UTF-8 strings). Note that the environment variable changes are only local to the 010 Editor process, so when 010 Editor is closed the changes will be lost.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "SetFileAttributesUnix": {
        "protos": [
            "int SetFileAttributesUnix( int attributes )"
        ],
        "desc": "Sets the file attributes of the current Unix or Macintosh file to attributes. The attributes are a bit flag composed of the constants listed in the GetFileAttributesUnix function.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "SetFileAttributesWin": {
        "protos": [
            "int SetFileAttributesWin( int attributes )"
        ],
        "desc": "Sets the file attributes of the current Windows file to the given attributes. The attributes are a bit flag made up of the constants in the GetFileAttributesWin function.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "SetFileCharSet": {
        "protos": [
            "void SetFileCharSet( int charsetId )"
        ],
        "desc": "Sets the character set for the current file to charsetId. charsetId is an integer constant representing a character set and the list of constants is available in the ConvertString function.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "SetFileInterface": {
        "protos": [
            "int SetFileInterface( const char name[] )"
        ],
        "desc": "Sets the Edit As of the current file to the Edit As with the given name. The current Edit As of the file can be returned using the GetFileInterface function.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "SetKeepFileTime": {
        "protos": [
            "void SetKeepFileTime( int keeptime )"
        ],
        "desc": "Sets the keep file time of the current file to keeptime. If keeptime is true and the file is saved, the file modified time on disk will not be changed.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "SetMouseWheelScrollSpeed": {
        "protos": [
            "void SetMouseWheelScrollSpeed( int speed )"
        ],
        "desc": "Sets the number of lines that are scrolled each time a scroll wheel on a mouse is clicked forward or backward. The scroll speed is also listed in the Editor Options dialog and the scroll speed can be investigated with the GetMouseWheelScrollSpeed function.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "SetReadOnly": {
        "protos": [
            "int SetReadOnly( int readonly )"
        ],
        "desc": "Sets the read-only status of the current file to true or false. A negative number is returned if the read-only status could not be changed.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "SetSelection": {
        "protos": [
            "void SetSelection( int64 start, int64 size )"
        ],
        "desc": "Selects size bytes from the file starting at the local address start. The selected bytes will appear blue in the main window.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "SetStartingAddress": {
        "protos": [
            "void SetStartingAddress( int64 address )"
        ],
        "desc": "Sets the starting address of the file to address, which is given in file coordinates. The starting address is the address of the first byte in the file shown in the Hex Editor.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "SetStyle": {
        "protos": [
            "void SetStyle( int style )"
        ],
        "desc": "Sets both the current foreground and background color to the color indicated by the style constant. A list of available style constants is given in the Template Styles sections.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "SetUnoptimizedArraysCollapsible": {
        "protos": [
            "void SetUnoptimizedArraysCollapsible( int collapsible )"
        ],
        "desc": "Sets whether unoptimized arrays can be opened or closed using a parent node in the Template Results. The value of collapsible should be either true or false and use GetUnoptimizedArraysCollapsible to query the initial value when the template is run.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "SetWorkingDirectory": {
        "protos": [
            "int SetWorkingDirectory( const char dir[] )"
        ],
        "desc": "Sets the current working directory of the application to the directory dir. The current working directory can be retrieved using the GetWorkingDirectory or GetWorkingDirectoryW functions.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "SetWorkingDirectoryW": {
        "protos": [
            "int SetWorkingDirectoryW( const wchar_t dir[] )"
        ],
        "desc": "Sets the current working directory of the application to the directory dir. The current working directory can be retrieved using the GetWorkingDirectory or GetWorkingDirectoryW functions.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "Sleep": {
        "protos": [
            "void Sleep( int milliseconds )"
        ],
        "desc": "Halts program execution for the given number of milliseconds. For example, 'Sleep(2000);' would cause a pause of two seconds.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "StatusMessage": {
        "protos": [
            "void StatusMessage( const char format[] [, argument, ... ] )"
        ],
        "desc": "Similar to the Printf function except the resulting string is displayed in the Status Bar of the application as a normal status message. See also the Warning function.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "ThemeAutoScaleColors": {
        "protos": [
            "void ThemeAutoScaleColors( int autoScale, float scaleFactor=0.5f )"
        ],
        "desc": "Background colors in a Template can be specified with either the bgcolor special attribute or with the SetBackColor function. When the editor is using a dark Theme the background colors are multiplied by a scale factor which effectively darkens the colors to fit in with the dark theme.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "ThemeIsDark": {
        "protos": [
            "int ThemeIsDark()"
        ],
        "desc": "Returns true if the current Theme uses a dark color for the Editor background or returns false if the current Theme uses a light color for the Editor background. Note that colors applied using a Template automatically adjust their colors when being used on a dark theme and see the ThemeAutoScaleColors function to control this.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "Terminate": {
        "protos": [
            "void Terminate( int force=true )"
        ],
        "desc": "Exits out of the script and then shuts down 010 Editor. If force is true, all open files will be closed and any unsaved modifications will be lost.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "Warning": {
        "protos": [
            "void Warning( const char format[] [, argument, ... ] )"
        ],
        "desc": "Similar to the Printf function except the resulting string is displayed in the Status Bar of the application and is highlighted orange. This is useful to display an error that occurs in a Template.",
        "category": "Interface",
        "page": "FuncInterface.htm"
    },
    "BigEndian": {
        "protos": [
            "void BigEndian()"
        ],
        "desc": "Indicates that all subsequent reads and writes from the file should use big-endian byte order. This function can be used in a Template to specify the byte order of variables.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "BitfieldDisablePadding": {
        "protos": [
            "void BitfieldDisablePadding()"
        ],
        "desc": "These functions control how multiple bitfields are packed into a set of bits. See Bitfields more information on bitfields.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "BitfieldEnablePadding": {
        "protos": [
            "void BitfieldEnablePadding()"
        ],
        "desc": "These functions control how multiple bitfields are packed into a set of bits. See Bitfields more information on bitfields.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "BitfieldGetAutoCheckBox": {
        "protos": [
            "int BitfieldGetAutoCheckBox()"
        ],
        "desc": "This function returns true if all Bitfields that are defined with only 1 bit are automatically assigned a check box Variable Editor in the Template Results. Use BitfieldSetAutoCheckBox to turn on or off this functionality.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "BitfieldGetCurrentShift": {
        "protos": [
            "int BitfieldGetCurrentShift()"
        ],
        "desc": "Returns the number of bits that have been read so far when defining template variables using bitfields. This value, along with the FTell function, indicate the current bit read position in a file.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "BitfieldLeftToRight": {
        "protos": [
            "void BitfieldLeftToRight()"
        ],
        "desc": "These functions control how bitfields are packed into a variable. See Bitfields for an introduction to using bitfields.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "BitfieldRightToLeft": {
        "protos": [
            "void BitfieldRightToLeft()"
        ],
        "desc": "These functions control how bitfields are packed into a variable. See Bitfields for an introduction to using bitfields.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "BitfieldSetAutoCheckBox": {
        "protos": [
            "void BitfieldSetAutoCheckBox( int enabled )"
        ],
        "desc": "If enabled is true, all Bitfields that are defined with a single bit are automatically assigned a check box Variable Editor in the Template Results. Note the check box is applied when the variable is first created.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "ConvertBytesToDouble": {
        "protos": [
            "double ConvertBytesToDouble( uchar byteArray[] )"
        ],
        "desc": "These functions take as input an array of hex bytes byteArray and returns either the double, float, or hfloat that is represented by those bytes. The byteArray parameter must contain at least 8 bytes for the ConvertBytesToDouble function, 4 bytes for the ConvertBytesToFloat function, or 2 bytes for the ConvertBytesToHFloat function.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "ConvertBytesToFloat": {
        "protos": [
            "float ConvertBytesToFloat( uchar byteArray[] )"
        ],
        "desc": "These functions take as input an array of hex bytes byteArray and returns either the double, float, or hfloat that is represented by those bytes. The byteArray parameter must contain at least 8 bytes for the ConvertBytesToDouble function, 4 bytes for the ConvertBytesToFloat function, or 2 bytes for the ConvertBytesToHFloat function.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "ConvertBytesToHFloat": {
        "protos": [
            "hfloat ConvertBytesToHFloat( uchar byteArray[] )"
        ],
        "desc": "These functions take as input an array of hex bytes byteArray and returns either the double, float, or hfloat that is represented by those bytes. The byteArray parameter must contain at least 8 bytes for the ConvertBytesToDouble function, 4 bytes for the ConvertBytesToFloat function, or 2 bytes for the ConvertBytesToHFloat function.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "ConvertDataToBytes": {
        "protos": [
            "int ConvertDataToBytes( data_type value, uchar byteArray[] )"
        ],
        "desc": "g. ), this function converts the variable to a set of bytes as it would be written to a file and stores the results in the byteArray variable.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "DeleteBytes": {
        "protos": [
            "void DeleteBytes( int64 start, int64 size )"
        ],
        "desc": "Deletes size bytes from the file, starting at local address start.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "DirectoryExists": {
        "protos": [
            "int DirectoryExists( string dir )"
        ],
        "desc": "Returns true if the given directory exists on disk or false if it does not. dir should be the full path for a directory.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "DisasmGetMode": {
        "protos": [
            "int DisasmGetMode()"
        ],
        "desc": "Returns the current disassembler mode set with the DisasmSetMode function. If no disassembler mode has been set then zero is returned.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "DisasmNumOps": {
        "protos": [
            "int64 DisasmNumOps( Opcode ops[] )"
        ],
        "desc": "010 Editor has a special optimization for disassembling large blocks of data. When creating an Opcode array, the size specified between the '[' and ']' brackets is the number of bytes, not the number of Opcodes.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "DisasmOpSizeFromFile": {
        "protos": [
            "int DisasmOpSizeFromFile( int64 pos )"
        ],
        "desc": "Given a starting address pos in a file, calculates the Opcode at that address and returns the number of bytes the Opcode uses. Returns 0 if no valid opcode could be found at the address.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "DisasmOpString": {
        "protos": [
            "string DisasmOpString( Opcode &op )"
        ],
        "desc": "Given an Opcode op, this function converts the opcode into a string which represents the assembly language for that opcode and returns the string. If the opcode could not be converted into assembly language then an empty string is returned.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "DisasmOpStringFromFile": {
        "protos": [
            "string DisasmOpStringFromFile( int64 pos )"
        ],
        "desc": "Given a position in a file pos, this function converts the bytes starting at the position into an Opcode and returns a string representing the Opcode. If no valid Opcode is found then an empty string is returned.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "DisasmSetMode": {
        "protos": [
            "void DisasmSetMode( int mode )"
        ],
        "desc": "Sets the current disassembler mode, which consists of an architecture possibly OR'd with a number of option flags. Any Opcode variables defined after this function is called will be assigned the given disassembler mode.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "FEof": {
        "protos": [
            "int FEof()"
        ],
        "desc": "Returns true if the current read position is at the end of the file.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "FileSize": {
        "protos": [
            "int64 FileSize()"
        ],
        "desc": "Returns the size of the current file in bytes.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "FindFiles": {
        "protos": [
            "TFileList FindFiles( string dir, string filter )"
        ],
        "desc": "This function scans the given directory dir and returns all files that match the filter. The filter can contain the wildcard characters * and ?",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "FPrintf": {
        "protos": [
            "int FPrintf( int fileNum, char format[], ... )"
        ],
        "desc": "Performs a Printf starting from format and writes the resulting string to the file with index fileNum. Use the function GetFileNum to get the index of a file.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "FSeek": {
        "protos": [
            "int FSeek( int64 pos )"
        ],
        "desc": "Sets the current read position to the local address pos. The read position is used when defining variables in a Template.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "FSkip": {
        "protos": [
            "int FSkip( int64 offset )"
        ],
        "desc": "Moves the current read position ahead by offset bytes. offset can also be negative to move the read position backwards.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "FTell": {
        "protos": [
            "int64 FTell()"
        ],
        "desc": "Returns the current read position of the file in local coordinates. This read position is used when defining variables in a Template.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "InsertBytes": {
        "protos": [
            "void InsertBytes( int64 start, int64 size, uchar value=0 )"
        ],
        "desc": "Inserts size bytes into the file starting at local address start. If start is at the end of the file, the file will be lengthened by size bytes.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "IsBigEndian": {
        "protos": [
            "int IsBigEndian()"
        ],
        "desc": "Returns true if the file is being read in big-endian byte order, or false otherwise.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "IsBitfieldLeftToRight": {
        "protos": [
            "int IsBitfieldLeftToRight()"
        ],
        "desc": "Returns true if bitfields are being packed from left-to-right or false if bitfields are being packed from right-to-left. The current bitfield packing direction can be modified with the functions BitfieldLeftToRight and BitfieldRightToLeft.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "IsBitfieldPaddingEnabled": {
        "protos": [
            "int IsBitfieldPaddingEnabled()"
        ],
        "desc": "Returns true if padding is enabled for bitfields. Padding determines how bitfields are packed into variables and see the BitfieldEnablePadding or BitfieldDisablePadding functions to change the padding state.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "IsLittleEndian": {
        "protos": [
            "int IsLittleEndian()"
        ],
        "desc": "Returns true if the file is being read in little-endian byte order, or false otherwise.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "LittleEndian": {
        "protos": [
            "void LittleEndian()"
        ],
        "desc": "Indicates that all subsequent reads and writes from the file should use little-endian byte order. This function can be used in a Template to specify the byte order of variables.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "MakeDir": {
        "protos": [
            "int MakeDir( string dir )"
        ],
        "desc": "Attempts to create the directory given by dir. If any of the parent directories of the given directory do not exist, they will be created too.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "OverwriteBytes": {
        "protos": [
            "void OverwriteBytes( int64 start, int64 size, uchar value=0 )"
        ],
        "desc": "Overwrites size bytes in the file starting at local address start. The value of each byte written is controlled by the value parameter.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "ReadByte": {
        "protos": [
            "char ReadByte( int64 pos=FTell() )"
        ],
        "desc": "Returns data read from the file at local address pos. If no pos is given, pos defaults to the current read position as reported by FTell.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "ReadDouble": {
        "protos": [
            "double ReadDouble( int64 pos=FTell() )"
        ],
        "desc": "Returns data read from the file at local address pos. If no pos is given, pos defaults to the current read position as reported by FTell.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "ReadFloat": {
        "protos": [
            "float ReadFloat( int64 pos=FTell() )"
        ],
        "desc": "Returns data read from the file at local address pos. If no pos is given, pos defaults to the current read position as reported by FTell.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "ReadHFloat": {
        "protos": [
            "hfloat ReadHFloat( int64 pos=FTell() )"
        ],
        "desc": "Returns data read from the file at local address pos. If no pos is given, pos defaults to the current read position as reported by FTell.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "ReadInt": {
        "protos": [
            "int ReadInt( int64 pos=FTell() )"
        ],
        "desc": "Returns data read from the file at local address pos. If no pos is given, pos defaults to the current read position as reported by FTell.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "ReadInt64": {
        "protos": [
            "int64 ReadInt64( int64 pos=FTell() )"
        ],
        "desc": "Returns data read from the file at local address pos. If no pos is given, pos defaults to the current read position as reported by FTell.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "ReadQuad": {
        "protos": [
            "int64 ReadQuad( int64 pos=FTell() )"
        ],
        "desc": "Returns data read from the file at local address pos. If no pos is given, pos defaults to the current read position as reported by FTell.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "ReadShort": {
        "protos": [
            "short ReadShort( int64 pos=FTell() )"
        ],
        "desc": "Returns data read from the file at local address pos. If no pos is given, pos defaults to the current read position as reported by FTell.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "ReadUByte": {
        "protos": [
            "uchar ReadUByte( int64 pos=FTell() )"
        ],
        "desc": "Returns data read from the file at local address pos. If no pos is given, pos defaults to the current read position as reported by FTell.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "ReadUInt": {
        "protos": [
            "uint ReadUInt( int64 pos=FTell() )"
        ],
        "desc": "Returns data read from the file at local address pos. If no pos is given, pos defaults to the current read position as reported by FTell.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "ReadUInt64": {
        "protos": [
            "uint64 ReadUInt64( int64 pos=FTell() )"
        ],
        "desc": "Returns data read from the file at local address pos. If no pos is given, pos defaults to the current read position as reported by FTell.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "ReadUQuad": {
        "protos": [
            "uint64 ReadUQuad( int64 pos=FTell() )"
        ],
        "desc": "Returns data read from the file at local address pos. If no pos is given, pos defaults to the current read position as reported by FTell.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "ReadUShort": {
        "protos": [
            "ushort ReadUShort( int64 pos=FTell() )"
        ],
        "desc": "Returns data read from the file at local address pos. If no pos is given, pos defaults to the current read position as reported by FTell.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "ReadLine": {
        "protos": [
            "char[] ReadLine( int64 pos, int maxLen=-1, int includeLinefeeds=true )"
        ],
        "desc": "Reads a string from the file starting at local address pos. Reads characters until a null-character or end-of-line sequence is found.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "ReadBytes": {
        "protos": [
            "void ReadBytes( uchar buffer[], int64 pos, int n )"
        ],
        "desc": "Reads n bytes starting from the local address pos into the character array buffer. Note that char[] and uchar[] can be used interchangeably.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "ReadString": {
        "protos": [
            "char[] ReadString( int64 pos, int maxLen=-1 )"
        ],
        "desc": "Reads a string from the file starting at local address pos. Reads characters until a null-character is found or maxLen characters are read.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "ReadStringLength": {
        "protos": [
            "int ReadStringLength( int64 pos, int maxLen=-1 )"
        ],
        "desc": "Returns the length of a null-terminated string if it were read at the local address pos in the target file. In other words, this function counts the number of bytes until a null-byte is encountered, starting from address pos.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "ReadWLine": {
        "protos": [
            "wstring ReadWLine( int64 pos, int maxLen=-1 )"
        ],
        "desc": "Reads a wide (unicode) string from the file starting at local address pos. The string is read until a null-character or end-of-line sequence is encountered.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "ReadWString": {
        "protos": [
            "wstring ReadWString( int64 pos, int maxLen=-1 )"
        ],
        "desc": "Reads a wide (unicode) string from the file starting at the local address pos. The string is read until a null-character is encountered or maxLen characters are read.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "ReadWStringLength": {
        "protos": [
            "int ReadWStringLength( int64 pos, int maxLen=-1 )"
        ],
        "desc": "Calculates the number of characters in a null-terminated Unicode string if it were read at local address pos in the target file. This is equivalent to counting the number of words (a word is a group of two hex bytes) in the file until a word with zero value is encountered.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "TextAddressToLine": {
        "protos": [
            "int64 TextAddressToLine( int64 address )"
        ],
        "desc": "Given address in local coordinates, the position of a byte within a text file, this function returns the number of the line that contains that byte. Note that lines are numbered starting from 0.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "TextAddressToColumn": {
        "protos": [
            "int TextAddressToColumn( int64 address )"
        ],
        "desc": "Given an address of a byte in a file in local coordinates, this function returns the text column where that byte is located. Note that a column number is returned only when using a fixed-width font, otherwise -1 is returned.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "TextColumnToAddress": {
        "protos": [
            "int64 TextColumnToAddress( int64 line, int column )"
        ],
        "desc": "Given a line number line (note that line numbers start from 0) and a column, this function returns the byte address of the character in that column in local coordinates. If the address cannot be determined -1 is returned or if the line contains less than column number of columns, the address of the last character on the line is returned.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "TextGetNumLines": {
        "protos": [
            "int64 TextGetNumLines()"
        ],
        "desc": "Returns the number of lines in the current text file. If the current file is a hex file, -1 is returned.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "TextGetLineSize": {
        "protos": [
            "int TextGetLineSize( int64 line, int includeLinefeeds=true )"
        ],
        "desc": "Returns the number of bytes that the given line contains. The returned size includes the size of the linefeeds if includeLinefeeds is true but does not include the size of the linefeeds if includeLinefeeds is false.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "TextLineToAddress": {
        "protos": [
            "int64 TextLineToAddress( int64 line )"
        ],
        "desc": "Given a line number, this function returns the address of the first byte of that line in local coordinates. Note that line numbers start with 0.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "TextReadLine": {
        "protos": [
            "int TextReadLine( char buffer[], int64 line, int maxsize, int includeLinefeeds=true )"
        ],
        "desc": "This function reads the byte data from line number line and places it into the string buffer. Up to maxsize bytes will be read from the file and the number of bytes read is returned.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "TextReadLineW": {
        "protos": [
            "int TextReadLineW( wchar_t buffer[], int64 line, int maxsize, int includeLinefeeds=true )"
        ],
        "desc": "Reads bytes from the given line and places them into the wide string buffer. The full line, up to maxsize characters will be read from the file and the number of characters read is returned.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "TextWriteLine": {
        "protos": [
            "void TextWriteLine( const char buffer[], int64 line, int includeLinefeeds=true )"
        ],
        "desc": "Writes the data from the buffer to the given line, replacing the existing data of that line. Note that line numbers start at 0.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "TextWriteLineW": {
        "protos": [
            "void TextWriteLineW( const wchar_t buffer[], int64 line, int includeLinefeeds=true )"
        ],
        "desc": "This function writes the wide string from buffer to the given text file at line number line. Use this function if the current file is a Unicode file, otherwise use the TextWriteLine function.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "WriteByte": {
        "protos": [
            "void WriteByte( int64 pos, char value )"
        ],
        "desc": "Writes the value to the current file at the local address pos. Note that if bytes are written past the end of the file, the file will automatically be expanded.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "WriteDouble": {
        "protos": [
            "void WriteDouble( int64 pos, double value )"
        ],
        "desc": "Writes the value to the current file at the local address pos. Note that if bytes are written past the end of the file, the file will automatically be expanded.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "WriteFloat": {
        "protos": [
            "void WriteFloat( int64 pos, float value )"
        ],
        "desc": "Writes the value to the current file at the local address pos. Note that if bytes are written past the end of the file, the file will automatically be expanded.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "WriteHFloat": {
        "protos": [
            "void WriteHFloat( int64 pos, float value )"
        ],
        "desc": "Writes the value to the current file at the local address pos. Note that if bytes are written past the end of the file, the file will automatically be expanded.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "WriteInt": {
        "protos": [
            "void WriteInt( int64 pos, int value )"
        ],
        "desc": "Writes the value to the current file at the local address pos. Note that if bytes are written past the end of the file, the file will automatically be expanded.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "WriteInt64": {
        "protos": [
            "void WriteInt64( int64 pos, int64 value )"
        ],
        "desc": "Writes the value to the current file at the local address pos. Note that if bytes are written past the end of the file, the file will automatically be expanded.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "WriteQuad": {
        "protos": [
            "void WriteQuad( int64 pos, int64 value )"
        ],
        "desc": "Writes the value to the current file at the local address pos. Note that if bytes are written past the end of the file, the file will automatically be expanded.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "WriteShort": {
        "protos": [
            "void WriteShort( int64 pos, short value )"
        ],
        "desc": "Writes the value to the current file at the local address pos. Note that if bytes are written past the end of the file, the file will automatically be expanded.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "WriteUByte": {
        "protos": [
            "void WriteUByte( int64 pos, uchar value )"
        ],
        "desc": "Writes the value to the current file at the local address pos. Note that if bytes are written past the end of the file, the file will automatically be expanded.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "WriteUInt": {
        "protos": [
            "void WriteUInt( int64 pos, uint value )"
        ],
        "desc": "Writes the value to the current file at the local address pos. Note that if bytes are written past the end of the file, the file will automatically be expanded.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "WriteUInt64": {
        "protos": [
            "void WriteUInt64( int64 pos, uint64 value )"
        ],
        "desc": "Writes the value to the current file at the local address pos. Note that if bytes are written past the end of the file, the file will automatically be expanded.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "WriteUQuad": {
        "protos": [
            "void WriteUQuad( int64 pos, uint64 value )"
        ],
        "desc": "Writes the value to the current file at the local address pos. Note that if bytes are written past the end of the file, the file will automatically be expanded.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "WriteUShort": {
        "protos": [
            "void WriteUShort( int64 pos, ushort value )"
        ],
        "desc": "Writes the value to the current file at the local address pos. Note that if bytes are written past the end of the file, the file will automatically be expanded.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "WriteBytes": {
        "protos": [
            "void WriteBytes( const uchar buffer[], int64 pos, int n )"
        ],
        "desc": "Writes n bytes from the array buffer to the file at the local address pos. Note that char[] and uchar[] can be used interchangeably.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "WriteString": {
        "protos": [
            "void WriteString( int64 pos, const char value[] )"
        ],
        "desc": "Writes the string value to the current file at local address pos. Stops when the null-character is reached.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "WriteWString": {
        "protos": [
            "void WriteWString( int64 pos, const wstring value )"
        ],
        "desc": "Writes the wide string value to the current file at local address pos and stops when the null-character is reached. Note that the endian used for writing is taken from the current file endian, which can be set using the BigEndian or LittleEndian functions.",
        "category": "I/O",
        "page": "FuncIO.htm"
    },
    "Abs": {
        "protos": [
            "double Abs( double x )"
        ],
        "desc": "Returns the absolute value of the float pointer number x.",
        "category": "Math",
        "page": "FuncMath.htm"
    },
    "Ceil": {
        "protos": [
            "double Ceil( double x )"
        ],
        "desc": "Returns the smallest integer not less than x.",
        "category": "Math",
        "page": "FuncMath.htm"
    },
    "Cos": {
        "protos": [
            "double Cos( double a )"
        ],
        "desc": "Returns the cosine of the given angle. The angle is given in degrees.",
        "category": "Math",
        "page": "FuncMath.htm"
    },
    "Exp": {
        "protos": [
            "double Exp( double x )"
        ],
        "desc": "Calculates the exponential e to the power of x.",
        "category": "Math",
        "page": "FuncMath.htm"
    },
    "Floor": {
        "protos": [
            "double Floor( double x)"
        ],
        "desc": "Returns the highest integer less than or equal to x.",
        "category": "Math",
        "page": "FuncMath.htm"
    },
    "Log": {
        "protos": [
            "double Log( double x )"
        ],
        "desc": "Calculates the natural logarithm of x. This value is also known as ln(x).",
        "category": "Math",
        "page": "FuncMath.htm"
    },
    "Log10": {
        "protos": [
            "double Log10( double x )"
        ],
        "desc": "Calculates the common logarithm of x, also called the base-10 logarithm. For example, Log10(1000)=3.",
        "category": "Math",
        "page": "FuncMath.htm"
    },
    "Max": {
        "protos": [
            "double Max( double a, double b )"
        ],
        "desc": "Returns the larger of the numbers a and b.",
        "category": "Math",
        "page": "FuncMath.htm"
    },
    "Min": {
        "protos": [
            "double Min( double a, double b)"
        ],
        "desc": "Returns the smaller of the numbers a and b.",
        "category": "Math",
        "page": "FuncMath.htm"
    },
    "Pow": {
        "protos": [
            "double Pow( double x, double y)"
        ],
        "desc": "Returns x to the power of y.",
        "category": "Math",
        "page": "FuncMath.htm"
    },
    "Random": {
        "protos": [
            "int Random( int maximum )"
        ],
        "desc": "Returns a random integer between 0 and maximum-1 inclusive. The first time this function is called it creates a random seed for the random number generator so there is no need to call the SRand function; however, SRand can be called with a specific seed so that Random produces repeatable results.",
        "category": "Math",
        "page": "FuncMath.htm"
    },
    "Sin": {
        "protos": [
            "double Sin( double a )"
        ],
        "desc": "Computes the sine of the given angle. The angle is given in degrees.",
        "category": "Math",
        "page": "FuncMath.htm"
    },
    "Sqrt": {
        "protos": [
            "double Sqrt( double x )"
        ],
        "desc": "Calculates the positive square-root of the number x.",
        "category": "Math",
        "page": "FuncMath.htm"
    },
    "SRand": {
        "protos": [
            "void SRand( int seed )"
        ],
        "desc": "Provides the seed to the random number generator used for the Random function. Usually this function does not need to be called since a random seed is generated the first time the Random function is called using the system clock.",
        "category": "Math",
        "page": "FuncMath.htm"
    },
    "SwapBytes": {
        "protos": [
            "data_type SwapBytes( data_type x )"
        ],
        "desc": "Swaps the bytes of the variable and returns the result. Any of the basic data types can be specified (byte, short, int, int64, float, or double).",
        "category": "Math",
        "page": "FuncMath.htm"
    },
    "Tan": {
        "protos": [
            "double Tan( double a )"
        ],
        "desc": "Calculates the tangent of the given angle. The angle is given in degrees.",
        "category": "Math",
        "page": "FuncMath.htm"
    },
    "Atof": {
        "protos": [
            "double Atof( const char s[] )"
        ],
        "desc": "Converts a string to a floating-point number. Returns zero on error.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "Atoi": {
        "protos": [
            "int Atoi( const char s[] )"
        ],
        "desc": "Converts a string to an integer. Returns zero on error.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "BinaryStrToInt": {
        "protos": [
            "int64 BinaryStrToInt( const char s[] )"
        ],
        "desc": "Converts a string containing a binary number s to an integer and returns the result. For example: return BinaryStrToInt( \"01001101\" ); would return the number 77.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "ConvertString": {
        "protos": [
            "char[] ConvertString( const char src[], int srcCharSet, int destCharSet )"
        ],
        "desc": "Given a string src that uses the character set encoding srcCharSet, the string is converted to use the character set encoding destCharSet and returned as a string.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "DosDateToString": {
        "protos": [
            "string DosDateToString( DOSDATE d, char format[] = \"MM/dd/yyyy\" )"
        ],
        "desc": "Converts the given DOSDATE into a string and returns the results. By default the date will be in the format 'MM/dd/yyyy' but other formats can be used as described in the GetCurrentDateTime function.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "DosTimeToString": {
        "protos": [
            "string DosTimeToString( DOSTIME t, char format[] = \"hh:mm:ss\" )"
        ],
        "desc": "Converts the given DOSTIME into a string and returns the results. By default the time will be in the format 'hh:mm:ss' but other formats can be used as described in the GetCurrentDateTime function.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "EnumFlagsToString": {
        "protos": [
            "string EnumFlagsToString( enum e )"
        ],
        "desc": "If the variable e is an Enum Flags variable, the flags that are stored in the variable are converted to a string and returned. Multiple flags are separated by the '|' character.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "EnumStringToFlags": {
        "protos": [
            "int64 EnumStringToFlags( string s )"
        ],
        "desc": "If an enum flag type has been defined and this function is passed a string s which contains a series of flag names separated by '|' characters, this function will convert the string names to the corresponding enum value and return a bitwise or of all the values. For example, if the enum has possible values 'ONE=0x01', 'TWO=0x02' and 'THREE=0x04'...",
        "category": "String",
        "page": "FuncString.htm"
    },
    "EnumToString": {
        "protos": [
            "string EnumToString( enum e )"
        ],
        "desc": "If the given variable e is an enum, the value is converted into the string which represents that enum value and returned. The enum may be a constant or an enum variable.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "FileNameGetBase": {
        "protos": [
            "char[] FileNameGetBase( const char path[], int includeExtension=true )"
        ],
        "desc": "When called with a full path name for a file in path, this function removes the path name and returns the resulting string. If includeExtension is true, the file path will still contain any file extension if it exists, or if false the file extension is removed.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "FileNameGetBaseW": {
        "protos": [
            "wchar_t[] FileNameGetBaseW( const wchar_t path[], int includeExtension=true )"
        ],
        "desc": "When called with a full path name for a file in path, this function removes the path name and returns the resulting string. If includeExtension is true, the file path will still contain any file extension if it exists, or if false the file extension is removed.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "FileNameGetExtension": {
        "protos": [
            "char[] FileNameGetExtension( const char path[] )"
        ],
        "desc": "'.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "FileNameGetExtensionW": {
        "protos": [
            "wchar_t[] FileNameGetExtensionW( const wchar_t path[] )"
        ],
        "desc": "'.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "FileNameGetPath": {
        "protos": [
            "char[] FileNameGetPath( const char path[], int includeSlash=true )"
        ],
        "desc": "Given a full file name path, this function returns just the path portion of the file name. If includeSlash is true, the last character in the returned path will be a slash.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "FileNameGetPathW": {
        "protos": [
            "wchar_t[] FileNameGetPathW( const wchar_t path[], int includeSlash=true )"
        ],
        "desc": "Given a full file name path, this function returns just the path portion of the file name. If includeSlash is true, the last character in the returned path will be a slash.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "FileNameSetExtension": {
        "protos": [
            "char[] FileNameSetExtension( const char path[], const char extension[] )"
        ],
        "desc": "This function takes as input a file name path and an extension. The function then removes any existing extension in path, appends the new extension and then returns the resulting string.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "FileNameSetExtensionW": {
        "protos": [
            "wchar_t[] FileNameSetExtensionW( const wchar_t path[], const wchar_t extension[] )"
        ],
        "desc": "This function takes as input a file name path and an extension. The function then removes any existing extension in path, appends the new extension and then returns the resulting string.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "FileTimeToString": {
        "protos": [
            "string FileTimeToString( FILETIME ft, char format[] = \"MM/dd/yyyy hh:mm:ss\" )"
        ],
        "desc": "Converts the given FILETIME into a string and returns the results. By default the time will be in the format 'MM/dd/yyyy hh:mm:ss' but other formats can be used as described in the GetCurrentDateTime function.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "GUIDToString": {
        "protos": [
            "string GUIDToString( GUID g )"
        ],
        "desc": "Given a GUID g, the GUID is converted into a string in the format \"{XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX}\" and returned. Note that a GUID is the same as an array of 16 unsigned bytes (see Data Types, Typedefs, and Enums).",
        "category": "String",
        "page": "FuncString.htm"
    },
    "IntToBinaryStr": {
        "protos": [
            "char[] IntToBinaryStr( int64 num, int numGroups=0, int includeSpaces=true )"
        ],
        "desc": "Takes an input an integer num and returns that number converted to a binary string. The returned string will contain as many groups of 8 binary digits as are necessary to represent the number, and the minimum number of groups returned can be controlled with the numGroups parameter.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "IsCharAlpha": {
        "protos": [
            "int IsCharAlpha( char c )"
        ],
        "desc": "Returns true if the given character c is a letter or false otherwise. 0 or higher.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "IsCharAlphaW": {
        "protos": [
            "int IsCharAlphaW( wchar_t c )"
        ],
        "desc": "Returns true if the given character c is a letter or false otherwise. 0 or higher.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "IsCharNum": {
        "protos": [
            "int IsCharNum( char c )"
        ],
        "desc": "Returns true if the given character c is a number or false otherwise. 0 or higher.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "IsCharNumW": {
        "protos": [
            "int IsCharNumW( wchar_t c )"
        ],
        "desc": "Returns true if the given character c is a number or false otherwise. 0 or higher.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "IsCharAlphaNum": {
        "protos": [
            "int IsCharAlphaNum( char c )"
        ],
        "desc": "Returns true if the given character c is a letter or number, or false otherwise. 0 or higher.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "IsCharAlphaNumW": {
        "protos": [
            "int IsCharAlphaNumW( wchar_t c )"
        ],
        "desc": "Returns true if the given character c is a letter or number, or false otherwise. 0 or higher.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "IsCharPunct": {
        "protos": [
            "int IsCharPunct( char c )"
        ],
        "desc": "Returns true if the given character c is punctuation, or false otherwise. 0 or higher.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "IsCharPunctW": {
        "protos": [
            "int IsCharPunctW( wchar_t c )"
        ],
        "desc": "Returns true if the given character c is punctuation, or false otherwise. 0 or higher.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "IsCharSymbol": {
        "protos": [
            "int IsCharSymbol( char c )"
        ],
        "desc": "Returns true if the given character c is a symbol, or false otherwise. 0 or higher.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "IsCharSymbolW": {
        "protos": [
            "int IsCharSymbolW( wchar_t c )"
        ],
        "desc": "Returns true if the given character c is a symbol, or false otherwise. 0 or higher.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "IsCharWhitespace": {
        "protos": [
            "int IsCharWhitespace( char c )"
        ],
        "desc": "Returns true if the given character c is a space, tab, or linefeed character. 0 or higher.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "IsCharWhitespaceW": {
        "protos": [
            "int IsCharWhitespaceW( wchar_t c )"
        ],
        "desc": "Returns true if the given character c is a space, tab, or linefeed character. 0 or higher.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "Memcmp": {
        "protos": [
            "int Memcmp( const uchar s1[], const uchar s2[], int n )"
        ],
        "desc": "Compares the first n bytes of s1 and s2. Returns a value less than zero if s1 is less than s2, zero if they are equal, or a value greater than zero if s1 is greater than s2.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "Memcpy": {
        "protos": [
            "void Memcpy( uchar dest[], const uchar src[], int n, int destOffset=0, int srcOffset=0 )"
        ],
        "desc": "Copies a block of n bytes from src to dest. If srcOffset is not zero, the bytes are copied starting from the srcOffset byte in src.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "Memset": {
        "protos": [
            "void Memset( uchar s[], int c, int n )"
        ],
        "desc": "Sets the first n bytes of s to the byte c.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "OleTimeToString": {
        "protos": [
            "string OleTimeToString( OLETIME ot, char format[] = \"MM/dd/yyyy hh:mm:ss\" )"
        ],
        "desc": "Converts the given OLETIME into a string and returns the results. By default the time will be in the format 'MM/dd/yyyy hh:mm:ss' but other formats can be used as described in the GetCurrentDateTime function.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "RegExMatch": {
        "protos": [
            "int RegExMatch( string str, string regex );"
        ],
        "desc": "Attempts to match the Regular Expression regex with the string str. For the RegExMatch function both strings are assumed to be in ASCII+ANSI format and for the RegExMatchW function both strings are in Unicode format.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "RegExMatchW": {
        "protos": [
            "int RegExMatchW( wstring str, wstring regex );"
        ],
        "desc": "Attempts to match the Regular Expression regex with the string str. For the RegExMatch function both strings are assumed to be in ASCII+ANSI format and for the RegExMatchW function both strings are in Unicode format.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "RegExSearch": {
        "protos": [
            "int RegExSearch( string str, string regex, int &matchSize, int startPos=0 );"
        ],
        "desc": "Searches for an occurrence of the Regular Expression regex within the string str. Use RegExSearch to search ASCII+ANSI strings or the RegExSearchW function to search Unicode strings.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "RegExSearchW": {
        "protos": [
            "int RegExSearchW( wstring str, wstring regex, int &matchSize, int startPos=0 );"
        ],
        "desc": "Searches for an occurrence of the Regular Expression regex within the string str. Use RegExSearch to search ASCII+ANSI strings or the RegExSearchW function to search Unicode strings.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "SPrintf": {
        "protos": [
            "int SPrintf( char buffer[], const char format[] [, argument, ... ] )"
        ],
        "desc": "Performs a Printf starting from format and places the result into buffer. See Printf for more information.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "SScanf": {
        "protos": [
            "int SScanf( char str[], char format[], ... )"
        ],
        "desc": "This function parses the str parameter into a number of variables according to the format string. The format string uses the same specifiers as the Printf function.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "Str": {
        "protos": [
            "string Str( const char format[] [, argument, ... ] )"
        ],
        "desc": "Similar to the Printf function except the generated output is returned as a string instead of being displayed in the Output Window. This function is useful when writing inline read functions and is similar to the SPrintf function.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "Strcat": {
        "protos": [
            "void Strcat( char dest[], const char src[] )"
        ],
        "desc": "Appends the characters from src to the end of the string dest. The string may be resized if necessary.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "Strchr": {
        "protos": [
            "int Strchr( const char s[], char c )"
        ],
        "desc": "Scans the string s for the first occurrence of the character c. Returns the index of the match, or -1 if no characters match.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "Strcmp": {
        "protos": [
            "int Strcmp( const char s1[], const char s2[] )"
        ],
        "desc": "Compares the one string to another. Returns a value less than zero if s1 is less than s2, zero if they are equal, or a value greater than zero if s1 is greater than s2.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "Strcpy": {
        "protos": [
            "void Strcpy( char dest[], const char src[] )"
        ],
        "desc": "Copies string src to string dest, stopping when the null-character has been copied.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "StrDel": {
        "protos": [
            "char[] StrDel( const char str[], int start, int count )"
        ],
        "desc": "Removes count characters from str starting at the index start and returns the resulting string.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "Stricmp": {
        "protos": [
            "int Stricmp( const char s1[], const char s2[] )"
        ],
        "desc": "Identical to Strcmp except the strings are compared without case sensitivity.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "StringToDosDate": {
        "protos": [
            "int StringToDosDate( string s, DOSDATE &d, char format[] = \"MM/dd/yyyy\" )"
        ],
        "desc": "Converts the given string into a DOSDATE and stores the results in d. The format of the date string is given with the format parameter and is by default 'MM/dd/yyyy' but other formats can be used as described in the GetCurrentDateTime function.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "StringToDosTime": {
        "protos": [
            "int StringToDosTime( string s, DOSTIME &t, char format[] = \"hh:mm:ss\" )"
        ],
        "desc": "Converts the given string into a DOSTIME and stores the results in t. The format of the time string is given with the format parameter and is by default 'hh:mm:ss' but other formats can be used as described in the GetCurrentDateTime function.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "StringToFileTime": {
        "protos": [
            "int StringToFileTime( string s, FILETIME &ft, char format[] = \"MM/dd/yyyy hh:mm:ss\" )"
        ],
        "desc": "Converts the given string into a FILETIME and stores the results in ft. The format of the time string is given with the format parameter and is by default 'MM/dd/yyyy hh:mm:ss' but other formats can be used as described in the GetCurrentDateTime function.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "StringToGUID": {
        "protos": [
            "int StringToGUID( string str, GUID g )"
        ],
        "desc": "F, the string is converted into a GUID and stored in the g parameter. Note that a GUID is the same as an array of 16 unsigned bytes (see Data Types, Typedefs, and Enums).",
        "category": "String",
        "page": "FuncString.htm"
    },
    "StringToOleTime": {
        "protos": [
            "int StringToOleTime( string s, OLETIME &ot, char format[] = \"MM/dd/yyyy hh:mm:ss\" )"
        ],
        "desc": "Converts the given string into an OLETIME and stores the results in ot. The format of the string is given with the format parameter and is by default 'MM/dd/yyyy hh:mm:ss' but other formats can be used as described in the GetCurrentDateTime function.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "StringToTimeT": {
        "protos": [
            "int StringToTimeT( string s, time_t &t, char format[] = \"MM/dd/yyyy hh:mm:ss\" )"
        ],
        "desc": "Converts the given string into a time_t and stores the results in t. The format of the string is given with the format parameter and is by default 'MM/dd/yyyy hh:mm:ss' but other formats can be used as described in the GetCurrentDateTime function.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "StringToTime64T": {
        "protos": [
            "int StringToTime64T( string s, time64_t &t, char format[] = \"MM/dd/yyyy hh:mm:ss\" )"
        ],
        "desc": "Converts the given string into a time64_t and stores the results in t. The format of the string is given with the format parameter and is by default 'MM/dd/yyyy hh:mm:ss' but other formats can be used as described in the GetCurrentDateTime function.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "StringToUTF8": {
        "protos": [
            "char[] StringToUTF8( const char src[], int srcCharSet=CHARSET_ANSI )"
        ],
        "desc": "Takes as input a string src which uses the character set encoding srcCharSet. The string is converted to the UTF-8 character set and returned.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "StringToWString": {
        "protos": [
            "wstring StringToWString( const char str[], int srcCharSet=CHARSET_ANSI )"
        ],
        "desc": "Converts the given string str into a wide (unicode) string. str is assumed to be an ANSI string but other character sets can be specified using the srcCharSet parameter (see the ConvertString function for a list of character set constants).",
        "category": "String",
        "page": "FuncString.htm"
    },
    "Strlen": {
        "protos": [
            "int Strlen( const char s[] )"
        ],
        "desc": "Returns the number of bytes in s before the null-character.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "Strncmp": {
        "protos": [
            "int Strncmp( const char s1[], const char s2[], int n )"
        ],
        "desc": "Similar to Strcmp, except that no more than n characters are compared.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "Strncpy": {
        "protos": [
            "void Strncpy( char dest[], const char src[], int n )"
        ],
        "desc": "Similar to Strcpy, except that at most n characters will be copied.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "Strnicmp": {
        "protos": [
            "int Strnicmp( const char s1[], const char s2[], int n )"
        ],
        "desc": "Similar to Strcmp except that at most n characters are compared and the characters are compared without case sensitivity.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "Strstr": {
        "protos": [
            "int Strstr( const char s1[], const char s2[] )"
        ],
        "desc": "Scans the string s1 for the first occurrence of s2. Returns the index of the first matching character, or -1 if no match is found.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "SubStr": {
        "protos": [
            "char[] SubStr( const char str[], int start, int count=-1 )"
        ],
        "desc": "Returns a string containing count characters from str starting at the index start. If count is -1, all the characters from the start index to the end of the string are returned.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "TimeTToString": {
        "protos": [
            "string TimeTToString( time_t t, char format[] = \"MM/dd/yyyy hh:mm:ss\" )"
        ],
        "desc": "Converts the given time_t into a string and returns the results. By default the time will be in the format 'MM/dd/yyyy hh:mm:ss' but other formats can be used as described in the GetCurrentDateTime function.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "Time64TToString": {
        "protos": [
            "string Time64TToString( time64_t t, char format[] = \"MM/dd/yyyy hh:mm:ss\" )"
        ],
        "desc": "Converts the given time64_t into a string and returns the results. By default the time will be in the format 'MM/dd/yyyy hh:mm:ss' but other formats can be used as described in the GetCurrentDateTime function.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "ToLower": {
        "protos": [
            "char ToLower( char c )"
        ],
        "desc": "Takes as input a character c, converts the character to lowercase and then returns the result. If the character cannot be converted to lowercase, the unmodified character is returned.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "ToLowerW": {
        "protos": [
            "wchar_t ToLowerW( wchar_t c )"
        ],
        "desc": "Takes as input a character c, converts the character to lowercase and then returns the result. If the character cannot be converted to lowercase, the unmodified character is returned.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "ToUpper": {
        "protos": [
            "char ToUpper( char c )"
        ],
        "desc": "Returns the given character c converted to an uppercase character. If the character cannot be converted to uppercase the same character is returned.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "ToUpperW": {
        "protos": [
            "wchar_t ToUpperW( wchar_t c )"
        ],
        "desc": "Returns the given character c converted to an uppercase character. If the character cannot be converted to uppercase the same character is returned.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "WMemcmp": {
        "protos": [
            "void WMemcmp( const wchar_t s1[], const wchar_t s2[], int n )"
        ],
        "desc": "Compares the first n wchar_t items of the arrays s1 and s2. This function returns a value less than zero if s1 is less than s2, zero if they are equal, or a value greater than zero if s1 is greater than s2.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "WMemcpy": {
        "protos": [
            "void WMemcpy( wchar_t dest[], const wchar_t src[], int n, int destOffset=0, int srcOffset=0 )"
        ],
        "desc": "Copies n wchar_t items from the array src to the array dest. If srcOffset is not zero, the bytes are copied starting from the srcOffset index in src.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "WMemset": {
        "protos": [
            "void WMemset( wchar_t s[], int c, int n )"
        ],
        "desc": "Sets the first n wchar_t items of the array s to the value c.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "WStrcat": {
        "protos": [
            "void WStrcat( wchar_t dest[], const wchar_t src[] )"
        ],
        "desc": "Appends all characters from the src string to the end of the dest string. Note that the string may be resized if required and the += operator can also be used for a similar result.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "WStrchr": {
        "protos": [
            "int WStrchr( const wchar_t s[], wchar_t c )"
        ],
        "desc": "Searchs through the string s for the first occurrence of the character c. If the character is found, this function returns the index of the match, otherwise -1 is returned.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "WStrcmp": {
        "protos": [
            "int WStrcmp( const wchar_t s1[], const wchar_t s2[] )"
        ],
        "desc": "Use this function to compare one wide string to another. Returns a value less than zero if s1 is less than s2, zero if they are equal, or a value greater than zero if s1 is greater than s2.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "WStrcpy": {
        "protos": [
            "void WStrcpy( wchar_t dest[], const wchar_t src[] )"
        ],
        "desc": "Copies the string src to the string dest, stopping when the null-character has been copied.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "WStrDel": {
        "protos": [
            "wchar_t[] WStrDel( const whar_t str[], int start, int count )"
        ],
        "desc": "Returns a string where count characters have been removed from the string str starting at the index start. Note that the str argument is not modified.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "WStricmp": {
        "protos": [
            "int WStricmp( const wchar_t s1[], const wchar_t s2[] )"
        ],
        "desc": "Identical to WStrcmp except the strings are compared without case sensitivity.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "WStringToString": {
        "protos": [
            "char[] WStringToString( const wchar_t str[], int destCharSet=CHARSET_ANSI )"
        ],
        "desc": "Converts the given wide string str by default into an ANSI string and returns it. The string can be converted to other character sets using the destCharSet parameter (see the ConvertString function for a list of character set constants).",
        "category": "String",
        "page": "FuncString.htm"
    },
    "WStringToUTF8": {
        "protos": [
            "char[] WStringToUTF8( const wchar_t str[] )"
        ],
        "desc": "Takes as input a Unicode string str which is then converted to the UTF-8 character set and returned as a string.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "WStrlen": {
        "protos": [
            "int WStrlen( const wchar_t s[] )"
        ],
        "desc": "Counts the number of characters in s before the null-character is encountered and returns the result.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "WStrncmp": {
        "protos": [
            "int WStrncmp( const wchar_t s1[], const wchar_t s2[], int n )"
        ],
        "desc": "Similar to WStrcmp, except that at most n characters are compared between the two strings.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "WStrncpy": {
        "protos": [
            "void WStrncpy( wchar_t dest[], const wchar_t src[], int n )"
        ],
        "desc": "Similar to WStrcpy, except that at most n characters will be copied.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "WStrnicmp": {
        "protos": [
            "int WStrnicmp( const wchar_t s1[], const wchar_t s2[], int n )"
        ],
        "desc": "Similar to WStrcmp except that at most n characters are compared and the characters are compared without case sensitivity.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "WStrstr": {
        "protos": [
            "int WStrstr( const wchar_t s1[], const wchar_t s2[] )"
        ],
        "desc": "Searches through the wide string s1 for the first occurrence of the string s2. If the string is found, the index of the first matching character is returned, otherwise -1 is returned.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "WSubStr": {
        "protos": [
            "wchar_t[] WSubStr( const wchar_t str[], int start, int count=-1 )"
        ],
        "desc": "Returns a wide string containing count characters from str starting at the index start. If count is -1, all the characters from the start index to the end of the string are returned.",
        "category": "String",
        "page": "FuncString.htm"
    },
    "Checksum": {
        "protos": [
            "int64 Checksum(",
            "int algorithm,",
            "int64 start=0,",
            "int64 size=0,",
            "int64 crcPolynomial=-1,",
            "int64 crcInitValue=-1 )"
        ],
        "desc": "Runs a simple checksum on a file and returns the result as a int64.",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "ChecksumAlgArrayStr": {
        "protos": [
            "int ChecksumAlgArrayStr(",
            "int algorithm,",
            "char result[],",
            "uchar *buffer,",
            "int64 size,",
            "char ignore[]=\"\",",
            "int64 crcPolynomial=-1,",
            "int64 crcInitValue=-1 )"
        ],
        "desc": "Similar to the ChecksumAlgStr function except that the checksum is run on data stored in an array instead of in a file. The data for the checksum should be passed in the buffer array and the size parameter lists the number of bytes in the array.",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "ChecksumAlgArrayBytes": {
        "protos": [
            "int ChecksumAlgArrayBytes(",
            "int algorithm,",
            "uchar result[],",
            "uchar *buffer,",
            "int64 size,",
            "char ignore[]=\"\",",
            "int64 crcPolynomial=-1,",
            "int64 crcInitValue=-1 )"
        ],
        "desc": "Similar to the ChecksumAlgStr function except that the checksum is run on data in an array instead of in a file and the results are stored in an array of bytes instead of a string. The data for the checksum should be passed in the buffer array and the size parameter lists the number of bytes in the array.",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "ChecksumAlgStr": {
        "protos": [
            "int ChecksumAlgStr(",
            "int algorithm,",
            "char result[],",
            "int64 start=0,",
            "int64 size=0,",
            "char ignore[]=\"\",",
            "int64 crcPolynomial=-1,",
            "int64 crcInitValue=-1 )"
        ],
        "desc": "Similar to the Checksum algorithm except the following algorithm constants are supported:",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "ChecksumAlgBytes": {
        "protos": [
            "int ChecksumAlgBytes(",
            "int algorithm,",
            "uchar result[],",
            "int64 start=0,",
            "int64 size=0,",
            "char ignore[]=\"\",",
            "int64 crcPolynomial=-1,",
            "int64 crcInitValue=-1 )"
        ],
        "desc": "This function is identical to the ChecksumAlgStr function except that the checksum is returned as a byte array in the result argument. The return value is the number of bytes returned in the array.",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "Compare": {
        "protos": [
            "TCompareResults Compare(",
            "int type,",
            "int fileNumA,",
            "int fileNumB,",
            "int64 startA=0,",
            "int64 sizeA=0,",
            "int64 startB=0,",
            "int64 sizeB=0,",
            "int matchcase=true,",
            "int64 maxlookahead=10000,",
            "int64 minmatchlength=8,",
            "int64 quickmatch=512 )"
        ],
        "desc": "Runs a comparison between two files or between two blocks of data.",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "ConvertASCIIToEBCDIC": {
        "protos": [
            "char ConvertASCIIToEBCDIC( char ascii )"
        ],
        "desc": "Converts the given ASCII character into an EBCDIC character and returns the result.",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "ConvertASCIIToUNICODE": {
        "protos": [
            "void ConvertASCIIToUNICODE(",
            "int len,",
            "const char ascii[],",
            "ubyte unicode[],",
            "int bigendian=false )"
        ],
        "desc": "Converts an ASCII string into an array of bytes and stores them in the unicode argument. len indicates the number of characters to convert and the unicode array must be of size at least 2*len.",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "ConvertASCIIToUNICODEW": {
        "protos": [
            "void ConvertASCIIToUNICODEW(",
            "int len,",
            "const char ascii[],",
            "ushort unicode[] )"
        ],
        "desc": "Converts an ASCII string into an array of words and stores the array in the unicode argument. The number of characters to convert is given by the len argument and the unicode argument must have size at least len.",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "ConvertEBCDICToASCII": {
        "protos": [
            "char ConvertEBCDICToASCII( char ebcdic )"
        ],
        "desc": "Converts the given EBCDIC character into an ASCII character and returns the result.",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "ConvertUNICODEToASCII": {
        "protos": [
            "void ConvertUNICODEToASCII(",
            "int len,",
            "const ubyte unicode[],",
            "char ascii[],",
            "int bigendian=false )"
        ],
        "desc": "Converts an array of UNICODE characters in the unicode argument into ASCII bytes and stores them in the ascii array. len indicates the number of characters to convert.",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "ConvertUNICODEToASCIIW": {
        "protos": [
            "void ConvertUNICODEToASCIIW(",
            "int len,",
            "const ushort unicode[],",
            "char ascii[] )"
        ],
        "desc": "Converts the array of words in the unicode argument to ASCII bytes and saves them to the ascii argument. The number of characters to convert is given by len.",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "ExportFile": {
        "protos": [
            "int ExportFile(",
            "int type,",
            "char filename[],",
            "int64 start=0,",
            "int64 size=0,",
            "int64 startaddress=0,",
            "int bytesperrow=16,",
            "int wordaddresses=0,",
            "int includeSpaces=true,",
            "int includeLinefeeds=true )"
        ],
        "desc": "Exports the currently open file to a file on disk given by filename using one of the following type formats:",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "FindAll": {
        "protos": [
            "TFindResults FindAll(",
            "<datatype> data,",
            "int matchcase=true,",
            "int wholeword=false,",
            "int method=0,",
            "double tolerance=0.0,",
            "int dir=1,",
            "int64 start=0,",
            "int64 size=0,",
            "int wildcardMatchLength=24 )"
        ],
        "desc": "This function converts the argument data into a set of hex bytes and then searches the current file for all occurrences of those bytes. data may be any of the basic types or an array of one of the types.",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "FindFirst": {
        "protos": [
            "int64 FindFirst(",
            "<datatype> data,",
            "int matchcase=true,",
            "int wholeword=false,",
            "int method=0,",
            "double tolerance=0.0,",
            "int dir=1,",
            "int64 start=0,",
            "int64 size=0,",
            "int wildcardMatchLength=24 )"
        ],
        "desc": "This function is identical to the FindAll function except that the return value is the position of the first occurrence of the target found in local coordinates. A negative number is returned if the value could not be found.",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "FindInFiles": {
        "protos": [
            "TFindInFilesResults FindInFiles(",
            "<datatype> data,",
            "char dir[],",
            "char mask[],",
            "int subdirs=true,",
            "int openfiles=false,",
            "int matchcase=true,",
            "int wholeword=false,",
            "int method=0,",
            "double tolerance=0.0,",
            "int wildcardMatchLength=24,",
            "int followSymbolicLinks=true )"
        ],
        "desc": "Searches for a given set of data across multiple files. See the FindAll function for information on the data, matchcase, wholeword, method, wildcardMatchLength and tolerance arguments.",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "FindNext": {
        "protos": [
            "int64 FindNext( int dir=1 )"
        ],
        "desc": "This function returns the position of the next occurrence of the target value specified with the FindFirst function. If dir is 1, the find direction is down.",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "FindStrings": {
        "protos": [
            "TFindStringsResults FindStrings(",
            "int minStringLength,",
            "int type,",
            "int matchingCharTypes,",
            "wstring customChars=\"\",",
            "int64 start=0,",
            "int64 size=0,",
            "int requireNull=false )"
        ],
        "desc": "Attempts to locate any strings within a binary file similar to the Find Strings dialog which is accessed by clicking 'Find > Find Strings' on the main menu. Specify the minimum length of each string in number of characters with the minStringLength parameter.",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "GetSectorSize": {
        "protos": [
            "int GetSectorSize()"
        ],
        "desc": "Returns the size in bytes of the sectors for this drive. If this file is not a drive, the current sector size is defined using the 'View > Division Lines > Set Sector Size' menu option.",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "HexOperation": {
        "protos": [
            "int HexOperation(",
            "int operation,",
            "int64 start,",
            "int64 size,",
            "operand,",
            "step=0,",
            "int64 skip=0 )"
        ],
        "desc": "Perform any of the operations on hex data as available in the Hex Operations dialog. The operation parameter chooses which operation to perform and these operations are described in the Hex Operations dialog documentation.",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "Histogram": {
        "protos": [
            "int64 Histogram( int64 start, int64 size, int64 result[256] )"
        ],
        "desc": "Counts the number of bytes of each value in the file from 0 up to 255. The bytes are counting starting from local address start and continuing for size bytes.",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "ImportFile": {
        "protos": [
            "int ImportFile( int type, char filename[], int wordaddresses=false, int defaultByteValue=-1 )"
        ],
        "desc": "Attempts to import the file specified by filename in one of the supported import formats.",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "IsDrive": {
        "protos": [
            "int IsDrive()"
        ],
        "desc": "Returns true if the current file is a physical or logical drive, or false otherwise (see Editing Drives).",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "IsLogicalDrive": {
        "protos": [
            "int IsLogicalDrive()"
        ],
        "desc": "Returns true if the current file is a logical drive, or false otherwise (see Editing Drives).",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "IsPhysicalDrive": {
        "protos": [
            "int IsPhysicalDrive()"
        ],
        "desc": "Returns true if the current file is a physical drive, or false otherwise (see Editing Drives).",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "IsProcess": {
        "protos": [
            "int IsProcess()"
        ],
        "desc": "Returns true if the current file is a process, or false otherwise (see Editing Processes).",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "OpenLogicalDrive": {
        "protos": [
            "int OpenLogicalDrive( char driveletter )"
        ],
        "desc": "Opens the drive with the given driveLetter as a new file in the editor. For example, 'OpenLogicalDrive('c');'.",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "OpenPhysicalDrive": {
        "protos": [
            "int OpenPhysicalDrive( int physicalID )"
        ],
        "desc": "Opens the physical drive physicalID as a new file in the editor (see Editing Drives). For example, 'OpenPhysicalDrive(0);'.",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "OpenProcessById": {
        "protos": [
            "int OpenProcessById( int processID, int openwriteable=true )"
        ],
        "desc": "Opens a process identified by the processID number (see Editing Processes). If openwriteable is true, only bytes that can be modified are opened, otherwise all readable bytes are opened.",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "OpenProcessByName": {
        "protos": [
            "int OpenProcessByName( char processname[], int openwriteable=true )"
        ],
        "desc": "Attempts to open a process given by the name processname as a new file in the editor. exe\" );' If openwriteable is true, only bytes that can be modified are opened, otherwise all readable bytes are opened.",
        "category": "Tools",
        "page": "FuncTools.htm"
    },
    "ReplaceAll": {
        "protos": [
            "int ReplaceAll(",
            "<datatype> finddata,",
            "<datatype> replacedata,",
            "int matchcase=true,",
            "int wholeword=false,",
            "int method=0,",
            "double tolerance=0.0,",
            "int dir=1,",
            "int64 start=0,",
            "int64 size=0,",
            "int padwithzeros=false,",
            "int wildcardMatchLength=24 )"
        ],
        "desc": "This function converts the arguments finddata and replacedata into a set of bytes, and then finds all occurrences of the find bytes in the file and replaces them with the replace bytes. The arguments matchcase, wholeword, method, wildcardMatchLength, tolerance, dir, start, and size are all used when finding a value and are discussed in the FindA...",
        "category": "Tools",
        "page": "FuncTools.htm"
    }
};
