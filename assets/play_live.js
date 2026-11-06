// The one switch for the Google Play listing, read by /get/ and by the
// invite lander (404.html, which serves /join/<code>). The Google Play
// listing went live on 2026-11-06 (WitBlitz 2.2.2, seven countries), so the
// switch is true: an Android visitor is offered Google Play, and a desktop
// sees the Google Play link beside the App Store's. The rollback is this one
// line: set it back to false and both pages hide Google Play again.
window.WB_PLAY_LIVE = true;
