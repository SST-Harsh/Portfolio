import { useForm } from 'react-hook-form';

export default function Contact() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    
    reset(); 
  };

  return (
    <div className=' flex items-center justify-center bg-gray-800 py-12 px-4'>
      <div className='w-full max-w-md bg-white rounded-lg shadow-md p-8'>
        <h1 className='text-3xl font-bold text-center text-gray-800 mb-8'>Contact Us</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <div>
            <label htmlFor="name" className='block text-sm font-medium text-gray-700 mb-1'>
              Name
            </label>
            <input
              type='text'
              id="name"
              placeholder='Enter your name'
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-200'
              }`}
              {...register("name", { required: 'Name is required' })}
            />
            {errors.name && (
              <p className='mt-1 text-sm text-red-600'>{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-1'>
              Email
            </label>
            <input
              type='email'
              id="email"
              placeholder='Enter your email'
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-200'
              }`}
              {...register("email", { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && (
              <p className='mt-1 text-sm text-red-600'>{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className='block text-sm font-medium text-gray-700 mb-1'>
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder='Enter your message'
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-200'
              }`}
              {...register("message", { 
                required: 'Message is required',
                minLength: {
                  value: 10,
                  message: 'Message must be at least 10 characters'
                }
              })}
            />
            {errors.message && (
              <p className='mt-1 text-sm text-red-600'>{errors.message.message}</p>
            )}
          </div>

          <button
            type='submit'
            className='w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}