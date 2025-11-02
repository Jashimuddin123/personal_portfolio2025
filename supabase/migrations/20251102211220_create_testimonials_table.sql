/*
  # Create testimonials table

  1. New Tables
    - `testimonials`
      - `id` (uuid, primary key)
      - `name` (text) - reviewer name
      - `email` (text) - reviewer email
      - `rating` (integer) - star rating (1-5)
      - `review_text` (text) - review content
      - `image_url` (text, nullable) - reviewer profile image
      - `is_approved` (boolean) - admin approval status
      - `created_at` (timestamp) - submission date

  2. Security
    - Enable RLS on `testimonials` table
    - Allow anyone to view approved testimonials
    - Allow anyone to insert new testimonials
    - Only admins can update/delete (future admin table needed)
*/

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text text NOT NULL,
  image_url text,
  is_approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view approved testimonials"
  ON testimonials
  FOR SELECT
  TO anon, authenticated
  USING (is_approved = true);

CREATE POLICY "Anyone can submit a testimonial"
  ON testimonials
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
