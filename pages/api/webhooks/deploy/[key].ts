import { NextApiRequest, NextApiResponse } from "next";

const deployKey = process.env["DEPLOY_KEY"];
const platformDeployWebhook = process.env["PLATFORM_DEPLOY_WEBHOOK"] || "";

let pendingChanges = false;
const fourMinutes = 240_000;

/* The CMS may trigger webhooks multiple times per minute when articles
 * are saved / updated frequently. The CMS now hits this webhook which debounces multiple
 * requests, so only one deploy is triggered */
function deployEndpoint(req: NextApiRequest, res: NextApiResponse): void {
  const sentKey = req.query.key;

  if (sentKey !== deployKey) {
    res.status(403);
    res.send("");
    return;
  }
  pendingChanges = true;

  setTimeout(async () => {
    if (pendingChanges == false) {
      return;
    }
    pendingChanges = false;
    console.log("Triggering redeploy of site");
    await fetch(platformDeployWebhook, {
      method: "POST",
    });
  }, fourMinutes);

  res.json({ success: true, pendingChanges });
}

export default deployEndpoint;
