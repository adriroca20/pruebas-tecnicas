import React, { useState } from 'react';
import { Pill } from '../components/Pill';
import { MEDIA_FILE_MOCKUP } from '../constants';
import { IMedia } from '../interfaces/media.interface';
import { usePostMediaMutation } from '../state/slices/mediaSlice';

const UploadVideoScreen: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setdescription] = useState('');
    const [tag, setTag] = useState<string>("");
    const [tags, setTags] = useState<string[]>([]);
    const [videoFile, setVideoFile] = useState<File | undefined>();
    const [postMedia, {isLoading}] = usePostMediaMutation();

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setdescription(e.target.value);
    };
    const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTag(e.target.value)
    };
    const addTag = () => {
        if (tag === "") return;
        setTags([
            ...tags,
            tag
        ]);
        setTag("");
    };
    const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setVideoFile(file);
    };
    const joinTagsIntoString = (tags: string[]) => {
        return tags.join(', ');
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const tagsString = joinTagsIntoString(tags);
        const mediaToUpload: IMedia = {
            ...MEDIA_FILE_MOCKUP,
            id: Math.random().toString(36).substring(7),
            title,
            description,
            tags: tagsString
        }
        console.log(mediaToUpload);
        try{
            const res = await postMedia({mediaToUpload}).unwrap();
        }
        catch(err){
            console.log(err);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold  text-slate-200 pb-5">Upload Video</h1>
            <form className="flex flex-col items-center gap-10 w-[500px]" onSubmit={handleSubmit}>
                <div className='relative w-full'>
                    <label htmlFor="title" className="text-slate-200 absolute bg-black top-[-15px] left-3 px-3 rounded ">Title</label>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={handleTitleChange}
                        className="border border-gray-300 rounded-md px-4 py-2 h-12  w-full"
                    />
                </div>
                <div className='relative  w-full'>
                    <label htmlFor="description" className="text-slate-200 absolute bg-black top-[-15px] left-3 px-3 rounded ">Description</label>
                    <input
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={handleDescriptionChange}
                        className="border border-gray-300 rounded-md px-4 py-2 h-12  w-full"
                    />
                </div>
                <div className='relative  w-full'>
                    <label htmlFor="tags" className="text-slate-200 absolute bg-black top-[-15px] left-3 px-3 rounded ">Tags</label>
                    <input
                        type="text"
                        placeholder="Add your tags"
                        value={tag}
                        onChange={handleTagsChange}
                        className="border border-gray-300 rounded-md px-4 py-2 h-12  w-full"
                    />
                    <button type="button" onClick={addTag} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded absolute right-0 h-full">Add Tag</button>
                </div>
                <div className='flex flex-wrap gap-2'>
                    {
                        tags.length > 0 && tags.map((tag, index) => (
                            <Pill key={index} text={tag} />
                        ))
                    }
                </div>
                <div className='w-full flex gap-2'>
                    <label htmlFor="video" className="flex items-center justify-center text-slate-200 cursor-pointer bg-gray-500 hover:bg-gray-200 hover:text-black font-bold py-2 px-4 rounded w-1/2">Select your video</label>
                    <input
                        id='video'
                        type="file"
                        accept="video/mp4,video/x-m4v,video/*"
                        onChange={handleVideoUpload}
                        className="hidden"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-1/2 cursor-pointer"
                    >
                        Upload
                    </button>
                </div>

            </form>
        </div>
    );
};

export default UploadVideoScreen;