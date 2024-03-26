const { Post } = require('../models');

const postData = [
    {
        title: "Tesla's Stock Split Announcement Boosts Shares",
        content: "Tesla's shares surged after the company announced a stock split. The electric car maker's stock jumped 4.7% following the announcement. Tesla said it will implement a five-for-one stock split, meaning that for every one share held by investors, they will receive an additional four shares.",
        user_id: 3
    },
    {
        title: "SpaceX Launches Record-Breaking 143 Satellites",
        content: "SpaceX successfully launched a record-breaking 143 satellites on a single rocket, completing the most ever deployed in one mission. The mission, named Transporter-1, carried a variety of payloads, including small satellites from government and commercial organizations.",
        user_id: 5
    },
    {
        title: "Apple Unveils New iPhone with Advanced AR Features",
        content: "Apple introduced its latest iPhone model featuring advanced augmented reality (AR) capabilities. The new device comes equipped with enhanced AR sensors and software, promising to revolutionize the way users interact with their surroundings through immersive experiences.",
        user_id: 2
    },
    {
        title: "Facebook Faces Backlash Over Privacy Concerns",
        content: "Facebook is under fire once again for its handling of user data and privacy concerns. The social media giant is facing criticism after reports emerged of a data breach exposing millions of users' personal information. This latest incident has reignited calls for stricter regulations on tech companies.",
        user_id: 4
    },
    {
        title: "AI-Powered Medical Diagnostics Show Promising Results",
        content: "Recent studies have shown promising results for AI-powered medical diagnostics. Researchers have developed machine learning algorithms capable of accurately detecting various diseases from medical imaging scans, offering a potential breakthrough in early diagnosis and treatment.",
        user_id: 1
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;