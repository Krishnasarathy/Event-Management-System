import AWS, { config } from 'aws-sdk';

const S3Uploader = () => {

    const config = {
        bucketName: import.meta.env.AWS_BUCKET_NAME,
        dirName: "user-profiles",
        region: import.meta.env.AWS_BUCKET_REGION,
        accessKeyId: import.meta.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: import.meta.env.AWS_SECRET_ACCESS_KEY
    }

    const handleFileUpload = (event) => {
        const file = event.target.files[0];

        // Initializing our aws
        
    AWS.config.update({
            accessKeyId: config.accessKeyId,
            secretAccessKey: config.secretAccessKey,
            region: config.region
        })

        // Creating new instance
        const S3 = new AWS.S3();
        
        
    }

    return (
        <div>
            <input type="file" onChange={handleFileUpload} />
        </div>
    )
}


export default S3Uploader;
