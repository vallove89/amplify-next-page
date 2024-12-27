import { FileUploader } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';

export const DefaultFileUploaderExample = () => {
  return (
    <FileUploader
      acceptedFileTypes={['image/*']}
      path="public/"
      maxFileCount={1}
      isResumable
    />
  );
};

export default function PictureSubmissions() {
    return (
        <div>
            <h1>Picture Submission</h1>
            <DefaultFileUploaderExample />
        </div>
    )
}