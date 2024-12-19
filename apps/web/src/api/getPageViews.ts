export async function getPageViews({ slug }: { slug: string }) {
  return fetch(
    `https://app.posthog.com/api/projects/${process.env.NEXT_PUBLIC_POSTHOG_PROJECT_ID}/query`,
    {
      method: 'post',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_POSTHOG_PROJECT_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: {
          kind: 'EventsQuery',
          select: [
            'count(*)',
            // "event",
            // "person",
            // "coalesce(properties.$current_url, properties.$screen_name) -- Url / Screen",
            // "properties.$lib",
            // "timestamp"
          ],
          // "orderBy": [
          //     "timestamp DESC"
          // ],
          properties: [
            {
              key: '$current_url',
              operator: 'icontains',
              type: 'event',
              value: slug,
            },
          ],
          after: 'all',
          event: '$pageview',
        },
      }),
    }
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {
      throw err;
    });
}
