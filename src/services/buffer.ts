import { Buffer } from "@/types";

declare const firebase:any; 
declare const ace:any; 
declare const Firepad:any; 

//Initialize Firebase.
//TODO: replace with your Firebase project configuration
const config = {
  apiKey: '<API_KEY>',
  authDomain: "firepad-tests.firebaseapp.com",
  databaseURL: "https://firepad-tests.firebaseio.com"
};

const initApp = firebase.initializeApp(config);

class BufferService {

  codeBufferDiv(buf: Buffer){ 
    return "editor-" + buf.id;
  }

  getFirepadRef(buf: Buffer){
    const ref = firebase.database().ref();
    return ref.child(buf.hash);
  }

  initBuf(buf: Buffer) {
    const div    = this.codeBufferDiv(buf);
    const editor = ace.edit(div);
    editor.setTheme("ace/theme/textmate");
    editor.getSession().setMode("ace/mode/haskell");
    editor.setOptions({
      maxLines: 10,
      minLines: 10 
    });
    const firepadRef = this.getFirepadRef(buf);
    const firepad = Firepad.fromACE(firepadRef, editor, { 
      defaultText: '-- Haskell editing with Firepad!\ninc :: Int -> Int\ninc x = x + 1'
    });
  }
}

export default new BufferService();