import Editor from "./EditorwithUseQuill"



const Privacy = () => {

const privacycontent ={"ops":[{"insert":"Test 123\nherar we go\nf\n"}]};

return(
    <>
     <h2 className="mb-0 fs-32 font-w800">Privacy Policy</h2>

       <Editor content={privacycontent} placeholder={'enter privacy...'} />

    </>
)


}
export default Privacy