Feature: Facebook posting queue management

  As an admin, I want to manage which posts are queued for Facebook publishing

  Scenario: Admin queues a post for Facebook publishing
    Given there is a post available for Facebook publishing
    When admin adds the post to the Facebook posting queue
    Then the post is in the Facebook posting queue

  Scenario: Admin removes a post from the Facebook posting queue
    Given a post is in the Facebook posting queue
    When admin removes the post from the queue
    Then the post is no longer in the Facebook posting queue
