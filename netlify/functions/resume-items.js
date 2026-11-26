import { connectDatabase } from '../../server/database.js';
import { ResumeItem } from '../../server/models.js';

export default async (request) => {
  if (request.method !== 'GET') {
    return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET' } });
  }

  try {
    await connectDatabase();
    const items = await ResumeItem.find().lean();
    return Response.json(items);
  } catch (error) {
    console.error('Resume API error:', error.name);
    return Response.json({ error: 'Unable to load your quote. Please refresh the page or try again later.' }, 
      { status: 500 });
  }
};

export const config = { path: '/api/resume-items' };

